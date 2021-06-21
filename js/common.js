$(function(){
  //script 입력영역
  $("nav ul li a,.quick-btn a,a.button,.footer_top a").click(function(){
    console.log($(this.hash))
    let thisElem = $(this.hash);
    let offsetElem = thisElem.offset();
    console.log(offsetElem.top)
    $("html,body").stop();
    $("html,body").animate({scrollTop : offsetElem.top},1500);
  });

  $(".product-container").css("display","none");
  $(".product-container:nth-of-type(1)").css("display","block");
  $(".swiper-btn a").on("click",function(){
    let thisIndex = $(this).index() + 1; // 0 부터 시작하는걸 + 1 해서 1부터 시작
    $(".product-container").css("display","none");
    $(".product-container:nth-of-type("+thisIndex+")").css("display","block");
    $(".swiper-btn a").removeClass("on");
    $(".swiper-btn a:nth-of-type("+thisIndex+")").addClass("on");
    return false;
  });
});
