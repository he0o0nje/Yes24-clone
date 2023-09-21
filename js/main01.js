// Main1

// 메인배너 리스트 호버 시 css변경, 해당 컨텐츠 표시
$(".mbnTit").mouseenter(function () {
  $(".mbnTit").css({
    color: "",
    "background-color": "",
  });
  $(this).css({
    color: "#fff",
    "background-color": "#0080ff",
  });
  $(".mbnSub").hide();
  $(this).parents().siblings(".mbnSub").show();
  $(".mbnContImg").show();
});

$(".tabs").mouseenter(function () {
  $(".tabs a em").css({
    color: "",
    "background-color": "",
  });
  $(this).find("a em").css({
    color: "#fff",
    "background-color": "#333",
  });
  $(".mbnContImg").hide();
  $(this).siblings(".mbnContImg").show();
});

// 메인배너 슬라이드
$(function () {
  $(".mbnContImg.active").show();

  $(".mbnBtn.prev").click(function () {
    MBNprevSlide();
  });

  $(".mbnBtn.next").click(function () {
    MBNnextSlide();
  });
});

// $(".mbnContImg").not(".active").hide();

function MBNprevSlide() {
  $(".mbnContImg").hide();
  let allSlide = $(".mbnContImg");
  let currentIndex = 0;

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

  $(".mbnContImg").removeClass("active");
  $(".mbnContImg").eq(newIndex).addClass("active");
  $(".mbnContImg").eq(newIndex).show();
}

function MBNnextSlide() {
  $(".mbnContImg").hide();
  let allSlide = $(".mbnContImg");
  let currentIndex = 0;

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

  $(".mbnContImg").removeClass("active");
  $(".mbnContImg").eq(newIndex).addClass("active");
  $(".mbnContImg").eq(newIndex).show();
}

function YesNowslide() {
  let current = $(".mbnContImg:visible");
  let next = current.next(".mbnContImg");
  if (next.length === 0) {
    next = $(".mbnContImg:first");
  }
  current.hide();
  next.show();

  let index = next.index();
  $(".tabs").css({ "background-color": "#fff", color: "#333" });
  $(".tabs:eq(" + index + ")").css({
    "background-color": "#333",
    color: "#fff",
  });
}

setInterval(YesNowslide, 3000);
