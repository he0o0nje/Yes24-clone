// 로딩 시 각 컴포넌트에 보여질 컨텐츠
$(document).ready(function () {
  $("#mbn01").trigger("mouseenter");
  $("#tabs01").trigger("mouseenter");
  $("#todayBook01").trigger("mouseenter");
  $("#Multi01").trigger("click");
});

// 슬라이드 컨테이너 호버 시 prev, next 버튼 보여주기
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
addHoverEffect(".mbnSub", ".mbnBtn");
addHoverEffect(".todayBook", ".btnTB");
addHoverEffect(".nowBookArea", ".btnNB");
addHoverEffect(".bookClubArea", ".btnBC");
addHoverEffect(".bookClubRgt", ".btnBCR");
addHoverEffect("#main7", ".btnTv");
addHoverEffect(".cLTop", ".btnCT");
addHoverEffect(".cLBot", ".btnCN");
addHoverEffect(".cRTop", ".CRT");
addHoverEffect(".cRBot", ".CRB");
addHoverEffect("#main9", ".btnBn");

// Main1

// 메인배너 리스트 호버 시 css변경
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

// Main2

// 오늘의 책 목록
$(".tBThumb").mouseenter(function () {
  $(".tBcont").hide();
  $(this).siblings(".tBcont").show();
  $(".tBThumb").removeClass("hover");
  $(this).addClass("hover");
});

$(".tBcont").not(".active").hide();

function TBprevSlide() {
  $(".tBcont").hide();
  let allSlide = $(".tBcont");
  let currentIndex = 0;

  $(".tBcont").each(function (index) {
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
}

function TBnextSlide() {
  $(".tBcont").hide();
  let allSlide = $(".tBcont");
  let currentIndex = 0;

  $(".tBcont").each(function (index) {
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
}

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

// Main3
$(".nowBookSet").not(".active").hide();

function NBprevSlide() {
  $(".nowBookSet").hide();
  let allSlide = $(".nowBookSet");
  let currentIndex = 0;

  $(".nowBookSet").each(function (index) {
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

  $(".nowBookSet").removeClass("active");
  $(".nowBookSet").eq(newIndex).addClass("active");
  $(".nowBookSet").eq(newIndex).show();
  $(".nowBookArea .pageNum strong").text(newIndex + 1);
}

function NBnextSlide() {
  $(".nowBookSet").hide();
  let allSlide = $(".nowBookSet");
  let currentIndex = 0;

  $(".nowBookSet").each(function (index) {
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

  $(".nowBookSet").removeClass("active");
  $(".nowBookSet").eq(newIndex).addClass("active");
  $(".nowBookSet").eq(newIndex).show();
  $(".nowBookArea .pageNum strong").text(newIndex + 1);
}

// Main5
$(".bookClubArea .bookClubSet").not(".active").hide();

function BCprevSlide() {
  $(".bookClubArea .bookClubSet").hide();
  let allSlide = $(".bookClubArea .bookClubSet");
  let currentIndex = 0;

  $(".bookClubArea .bookClubSet").each(function (index) {
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

  $(".bookClubArea .bookClubSet").removeClass("active");
  $(".bookClubArea .bookClubSet").eq(newIndex).addClass("active");
  $(".bookClubArea .bookClubSet").eq(newIndex).show();
  $(".bookClubArea .pageNum strong").text(newIndex + 1);
}

function BCnextSlide() {
  $(".bookClubArea .bookClubSet").hide();
  let allSlide = $(".bookClubArea .bookClubSet");
  let currentIndex = 0;

  $(".bookClubArea .bookClubSet").each(function (index) {
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

  $(".bookClubArea .bookClubSet").removeClass("active");
  $(".bookClubArea .bookClubSet").eq(newIndex).addClass("active");
  $(".bookClubArea .bookClubSet").eq(newIndex).show();
  $(".bookClubArea .pageNum strong").text(newIndex + 1);
}

// Main6

// 멀티페이지 리스트 클릭 시 css변경, 해당 내용 보이기
$(".multiSecUnit h2").click(function () {
  $(".multiSecUnit h2").css({
    "background-color": "",
  });
  $(".multiSecUnit h2 a").css({
    "border-bottom": "",
  });
  $(this).css({
    "background-color": "#fff",
  });
  $(this).find("a").css({
    "border-bottom": "none",
  });
  $(".multiConArea").hide();
  $(this).siblings(".multiConArea").show();
});

// 슬라이드 컨테이너 호버 시 prev, next 버튼 보여주기
function M6addHoverEffect(M6selectorToShow) {
  $(M6selectorToShow).hover(
    function () {
      $(this).find(".btnMC").show();
    },
    function () {
      $(this).find(".btnMC").hide();
    }
  );
}
M6addHoverEffect("#MTS1");
M6addHoverEffect("#MTS2");
M6addHoverEffect("#MTS3");
M6addHoverEffect("#MTS4");
M6addHoverEffect("#MTS401");
M6addHoverEffect("#MTS5");
M6addHoverEffect("#MTS6");
M6addHoverEffect("#MTS8");
M6addHoverEffect(".sector04");
