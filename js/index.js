$(function () {
    //确保动画只执行一次
    var flag2 = true;
    var flag3 = true;
    var flag4 = true;
    var flag5 = true;
    var flag6 = true;
    var flag7 = true;

    $('#shopping').fullpage({
        //导航栏
        navigation: true,
        //垂直居中
        verticalCentered: false,
        //离开页面的回调函数
        onLeave: function (index, nextIndex, direction ) {
            $('.next').fadeOut();
        //    获取屏幕高度宽度
            var screanHeight = $(window).height();
            var screanWidth = $(window).width();
            // console.log(screenHeight);
            //  第二层进入第三层
            if (index === 2 && nextIndex === 3 && flag3) {
                flag3 = false;
            //    1.第二层沙发覆盖和替换
                $('.cover').show();
            //    2.第二层沙发掉到第三层
                $('.only-sofa').show().animate({
                    bottom: -screanHeight + 230,
                    width: 210,
                    height: 210,
                    marginLeft: -135
                },1000);
                //  3.显示隐藏按钮图片
                $('.three-img-active').delay(1000).fadeIn(500);
                $('.three-btn-active').delay(1000).fadeIn(500);
            }
        //    第三层进入第四层
            if (index === 3 && nextIndex === 4 && flag4) {
                flag4 = false;

            //    1将沙发替换
                $('.only-sofa').hide();

            //    2.沙发掉入购物车,然后替换
                $('.three-sofa-rotate').show().animate({
                    bottom: -screanHeight + 235,
                    marginLeft: -180
                }, 1000, function () {
                    $(this).hide();
                    $('.four-sofa-rotate').show();
                });
            //    3.购物车移动
                $('.four-car-wrapper').delay(1000).animate({
                    left: screanWidth + 100
                }, 2000, 'easeInOutBack');
            //    4.提示文字更换,地址容器显示
                $('.four-words-active').delay(3000).fadeIn(500);
                $('.four-address-wrapper').delay(3000).fadeIn(500)
            }
            // 第五层动画
            if (nextIndex === 5 && flag5) {
                // 1.手点击鼠标
                $('.five-hand').animate({
                    bottom: 0
                }, 700, function () {
                    $('.five-mouse-a').show(300);
                });
                // 2.账单出现
                $('.five-order').delay(1000).animate({
                    bottom: 370
                }, 500);
                // 3.沙发掉下来
                $('.five-sofa').delay(1500).animate({
                    bottom: 100,
                    opacity: 1
                }, 500);
                // 4.提示文本显示
                $('.five-words').delay(2000).fadeIn();
            }

            // 第六层动画
            if (index === 5 && nextIndex === 6 && flag6) {
                flag6 = false;
                // 1.第五层的沙发掉下来
                // 注意动画队列问题
                $('.five-sofa').stop(true).animate({
                    width: 30,
                    opacity: 1,
                    bottom: -screanHeight + 450
                }, 500, function() {
                    $(this).hide();
                });
                // 2.盒子接住沙发,然后箱子掉到车上
                $('.six-box').animate({
                    marginLeft: -200
                }, 500).animate({
                    bottom: 20
                }, 1000, function() {
                    $(this).hide();
                });
                // 3.汽车开始发动
                $('.page6').delay(1500).animate({
                    backgroundPositionX: '100%'
                }, 1000);
            //    4.快递员出现
                $('.six-man').delay(2500).animate({
                    bottom: 111
                }, 1000).animate({
                    right: 480
                }, 1000);
            //    5.收快递
                $('.six-getproduct').delay(4500).fadeIn(1000);
            //    6.门打开
                $('.six-door').delay(5500).fadeIn(500);
            //    7.女主人出现
                $('.six-women').delay(6000).fadeIn(1000);
            //    8.提示语出现
                $('.six-words').delay(7000).fadeIn(500);
            }
            if (index === 8) {
                $('body').off('mousemove')
            }
        },
        //加载完页面的回调函数
        afterLoad: function (anchorLink , index) {
            if (index !== 8) {
                $('.next').fadeIn();                
            }
            //    第二屏时
            if (index === 2 && flag2) {
                flag2 = false;
                //    1.搜索框出现
                $('.two-search-wrapper').animate({
                    'marginLeft': 0
                }, 1000);
            //    2.文字浮现
                $('.two-search-words').delay(1000).fadeIn(500, function () {
                //    替换搜索框
                    $('.two-search-wrapper').hide();
                    $('.two-search-copy').show();
                });
            //    3.搜索框缩小
                $('.two-search-copy').delay(1500).animate({
                    width: 150,
                    bottom: 450,
                    marginLeft: 200
                }, 500);
                // 4.商品图显示
                $('.two-goods').delay(2000).show(500);
            }
        //    第七屏时
            if (index === 7 && flag7) {
                flag7 = false;
                $('.seven-star').addClass('active');
                $('.seven-good').delay(500).fadeIn(500);
            }
        //    第八屏时
            if (index === 8) {
                $('body').on('mousemove', function (e) {
                    var screanHeight = $(window).height();
                    var x = e.clientX;
                    var y = e.clientY + 20;
                    var miny = screanHeight - 449;
                    if (y <= miny) {
                        y = miny;
                    }
                    $('.eight-hand').css({
                        'left': x,
                        'top': y
                    });
                    console.log(y);
                });

                $('.eight-again').on('click', function () {
                    // 参数1 就是移动到第几屏
                    // 1. 要回到第一屏幕
                    $.fn.fullpage.moveTo(1);
                    // location.reload();
                    $('img, .move').stop(true).attr("style", "");

                    // 背景重置一下 "backgroundPositionX", "20%"
                    $('.page6').stop(true).css("backgroundPositionX", "20%");

                    // 星星重置
                    $('.seven-star').removeClass("active");
                    // 3. 重置 flag
                    flag2 = true;
                    flag3 = true;
                    flag4 = true;
                    flag5 = true;
                    flag6 = true;
                    flag7 = true;
                });
            }
        }
    });

    //    注册点击事件跳转下一页
    $('.next').on('click', function () {
        $.fn.fullpage.moveSectionDown();
    })
})