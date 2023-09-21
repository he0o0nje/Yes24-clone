// Main7

// 이전, 다음 버튼 클릭 시 해당 유튜브, 관련상품 컨텐츠 보이고 해당 썸네일 호버CSS 변경 (TV)
$(".TvArea").not(".active").hide();

function TVprevSlide() {
  $(".TvArea").hide();
  let allSlide = $(".TvArea");
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

  $(".TvArea").removeClass("active");
  $(".TvArea").eq(newIndex).addClass("active");
  $(".TvArea").eq(newIndex).show();

  $(".TvSubGrp").hide();
  $(".TvSubGrp:eq(" + newIndex + ")").show();

  $(".TvThumb").removeClass("hover");
  $(".TvThumb:eq(" + newIndex + ")").addClass("hover");
}

function TVnextSlide() {
  $(".TvArea").hide();
  let allSlide = $(".TvArea");
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

  $(".TvArea").removeClass("active");
  $(".TvArea").eq(newIndex).addClass("active");
  $(".TvArea").eq(newIndex).show();

  $(".TvSubGrp").hide();
  $(".TvSubGrp:eq(" + newIndex + ")").show();

  $(".TvThumb").removeClass("hover");
  $(".TvThumb:eq(" + newIndex + ")").addClass("hover");
}

// 썸네일 호버 시 해당 인덱스의 컨텐츠 보이기
$(".TvThumb").mouseenter(function () {
  let index = $(this).index();
  $(".TvArea, .TvSubGrp").hide();
  $(".TvArea:eq(" + index + ")").show();
  $(".TvSubGrp:eq(" + index + ")").show();

  $(".TvThumb").removeClass("hover");
  $(this).addClass("hover");
});
