;(function ($) {
    $(function () {
        //设置fullpage

        $('#fullpage').fullpage({
            sectionsColor:['skyblue','green','yellowgreen','purple','#daa520'],
            scrollingSpeed:500,
            afterLoad:function(link,index){
                console.log(index); //12345
                //设置一个开关
                $('.section').removeClass('current');
                setTimeout(function(){
                    $('.section').eq(index-1).addClass('current');
                },100)}

        });
    })

})( window.jQuery )