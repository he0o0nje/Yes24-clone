// Main2

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이고, 해당 썸네일 호버CSS 변경
$(".tBcont").not(".active").hide();

function TBprevSlide() {
  $(".tBcont").hide();
  let allSlide = $(".tBcont");
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

  $(".tBcont").removeClass("active");
  $(".tBcont").eq(newIndex).addClass("active");
  $(".tBcont").eq(newIndex).show();

  $(".tBThumb").removeClass("hover");
  $(".tBThumb:eq(" + newIndex + ")").addClass("hover");
}

function TBnextSlide() {
  $(".tBcont").hide();
  let allSlide = $(".tBcont");
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

  $(".tBcont").removeClass("active");
  $(".tBcont").eq(newIndex).addClass("active");
  $(".tBcont").eq(newIndex).show();

  $(".tBThumb").removeClass("hover");
  $(".tBThumb:eq(" + newIndex + ")").addClass("hover");
}

// 썸네일 호버 시 해당 컨텐츠 보이기
$(".tBThumb").mouseenter(function () {
  $(".tBcont").hide();
  $(this).siblings(".tBcont").show();
  $(".tBThumb").removeClass("hover");
  $(this).addClass("hover");
});

// 베스트설러, 인기검색어 드롭다운 토글
$(".bestLi .optTit dd").hide();

$(".bestOpt").click(function (e) {
  e.preventDefault();

  $(".bestLi .optTit .bestOpt dt").toggleClass("c");
  $(".bestLi .optTit dd").toggle();
});

// 베스트셀러, 인기검색어 클릭 시 해당 리스트 보이기
$("#popli").hide();

$("#best").click(function (e) {
  e.preventDefault();

  $(".bestLi .optTit .bestOpt dt").removeClass("c");
  $("#pop a").css({
    "border-bottom": "solid 1px #d8d8d8",
  });
  $("#pop a em").css({ color: "#999" });
  $("#best a").css({ "border-bottom": "none" });
  $("#best a em").css({ color: "#333" });
  $("#bestli").show();
  $("#popli").hide();
  $(".bestLi .optTit dd").hide();
});

$("#pop").click(function (e) {
  e.preventDefault();

  $(".bestLi .optTit .bestOpt dt").removeClass("c");
  $("#best a").css({
    "border-bottom": "solid 1px #d8d8d8",
  });
  $("#best a em").css({ color: "#999" });
  $("#pop a").css({ "border-bottom": "none" });
  $("#pop a em").css({ color: "#333" });
  $("#popli").show();
  $("#bestli").hide();
  $(".bestLi .optTit dd").hide();
});

//베스트셀러 1~5위, 6~10위 클릭 시 해당 리스트 보이기
$("#bestSet02").hide();

$("#b1").css({ color: "#333", "font-weight": "bold" });
$("#b1").click(function (e) {
  e.preventDefault();

  $("#bestSet01").show();
  $("#bestSet02").hide();
  $("#b1").css({ color: "#333", "font-weight": "bold" });
  $("#b2").css({ color: "", "font-weight": "" });
});

$("#b2").click(function (e) {
  e.preventDefault();

  $("#bestSet01").hide();
  $("#bestSet02").show();
  $("#b2").css({ color: "#333", "font-weight": "bold" });
  $("#b1").css({ color: "", "font-weight": "" });
});
