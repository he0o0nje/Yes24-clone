// 책 3D 만들기
$(function () {
  var isRotated = false;

  $(".gd_img").click(function () {
    if (isRotated) {
      $(this).css("transform", "rotateY(35deg)");
      isRotated = false;
    } else {
      $(this).css("transform", "rotateY(180deg)");
      isRotated = true;
    }
  });

  $(".gd_img").hover(
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(40deg)");
      }
    },
    function () {
      if (!isRotated) {
        $(this).css("transform", "rotateY(0deg)");
      }
    }
  );
});

// 광고배너 호버
$(".bnLeft_img").not(":first").hide();

$(".detailBnWrap .bnLeftUnit").mouseenter(function () {
  $(".bnLeft_thumb").removeClass("on");
  $(this).find(".bnLeft_thumb").addClass("on");
  let index = $(this).index();
  $(".bnLeft_img").hide().eq(index).stop().show();
});

// 이 책 구입한 사람들이 산 책
