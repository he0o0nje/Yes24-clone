// 로딩 시 각 컴포넌트에 보여질 컨텐츠
$(document).ready(function () {
  $(".detailBnWrap .bnLeftUnit:first").trigger("mouseenter");
  $(".pGR_tab_2col div:first").trigger("click");
});

// 슬라이드 컨테이너 호버 시 prev, next 버튼 보여주기
$(".pgBtn").hide();
function addHoverEffect(selectorToShow, selectorToHide) {
  $(selectorToShow).hover(
    function () {
      $(selectorToHide).show();
    },
    function () {
      $(selectorToHide).hide();
    }
  );
}
addHoverEffect(".pGR_goodsWrap", ".pGR_goodsWrap .pgBtn");

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

// 멀티페이지 리스트 클릭 시 css변경, 해당 내용 보이기
$(".pGR_tab_2col div").click(function () {
  $(".pGR_tab_2col div").removeClass("on");
  $(this).addClass("on");
  let index = $(this).index();
  $(".pGR_goodsWrap").hide().eq(index).stop().show();
});

// Slide
$("#pGR01 ul").not(".active").hide();
function pGR01prevSlide() {
  let allSlide = $("#pGR01 ul");
  let currentIndex = 0;
  allSlide.hide();

  allSlide.each(function (index) {
    if ($(this).hasClass("active")) {
      currentIndex = index;
    }
  });

  let newIndex = 0;

  if (currentIndex <= 0) {
    newIndex = allSlide.length - 1;
  } else {
    newIndex = currentIndex - 1;
  }

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#pGR01 strong").text(newIndex + 1);
}

function pGR01nextSlide() {
  let allSlide = $("#pGR01 ul");
  let currentIndex = 0;
  allSlide.hide();

  allSlide.each(function (index) {
    if ($(this).hasClass("active")) {
      currentIndex = index;
    }
  });

  let newIndex = 0;

  if (currentIndex >= allSlide.length - 1) {
    newIndex = 0;
  } else {
    newIndex = currentIndex + 1;
  }

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#pGR01 strong").text(newIndex + 1);
}

$("#pGR02 ul").not(".active").hide();
function pGR02prevSlide() {
  let allSlide = $("#pGR02 ul");
  let currentIndex = 0;
  allSlide.hide();

  allSlide.each(function (index) {
    if ($(this).hasClass("active")) {
      currentIndex = index;
    }
  });

  let newIndex = 0;

  if (currentIndex <= 0) {
    newIndex = allSlide.length - 1;
  } else {
    newIndex = currentIndex - 1;
  }

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#pGR02 strong").text(newIndex + 1);
}

function pGR02nextSlide() {
  let allSlide = $("#pGR02 ul");
  let currentIndex = 0;
  allSlide.hide();

  allSlide.each(function (index) {
    if ($(this).hasClass("active")) {
      currentIndex = index;
    }
  });

  let newIndex = 0;

  if (currentIndex >= allSlide.length - 1) {
    newIndex = 0;
  } else {
    newIndex = currentIndex + 1;
  }

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#pGR02 strong").text(newIndex + 1);
}
