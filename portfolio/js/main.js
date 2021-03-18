$(function(){
   
$('.btn_down').click(function(){
    $('body,html').animate({'scrollTop':937},1000)
});

$(window).scroll(function(){
    var num = $(document).scrollTop()
    console.log(num)
    if(num>936 && num<=1874){
        $('.skill li .bar .HTML5, .skill li .bar .CSS3, .skill li .bar .JAVASCRIPT, .skill li .bar .JQUERY, .skill li .bar .PHOTO, .skill li .bar .ILL').addClass('on')
    }else if(num>0 && num<=936){
        $('.skill li .bar .HTML5, .skill li .bar .CSS3, .skill li .bar .JAVASCRIPT, .skill li .bar .JQUERY, .skill li .bar .PHOTO, .skill li .bar .ILL').removeClass('on')
    }

    if(num>936 && num<=1874){
        $('.skill li .bar .HTML5 p, .skill li .bar .CSS3 p, .skill li .bar .JAVASCRIPT p, .skill li .bar .JQUERY p, .skill li .bar .PHOTO p, .skill li .bar .ILL p').addClass('on')
    }else if(num>0 && num<=936){
        $('.skill li .bar .HTML5 p, .skill li .bar .HTML5 p, .skill li .bar .CSS3 p, .skill li .bar .JAVASCRIPT p, .skill li .bar .JQUERY p, .skill li .bar .PHOTO p, .skill li .bar .ILL p').removeClass('on')
    }

})

});