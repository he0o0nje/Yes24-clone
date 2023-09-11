// main1
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

$(".mbnSub").hover(
  function () {
    $(".mbnBtn").show();
  },
  function () {
    $(".mbnBtn").hide();
  }
);

// 이미지 보여질때 해당 제목 css변경
// $(".mbnRollUnit").each(function () {
//   const tabs = $(this).find(".tabs");
//   const mbnContImg = $(this).find(".mbnContImg");

//   if (mbnContImg.css("display") === "block") {
//     tabs.find("a em").css({
//       color: "#fff",
//       "background-color": "#333",
//     });
//   }
// });

// 슬라이더
// const mbnCurrentIndex = [];

// const totalSliders = $(".mbnContImg").length;

// for (let i = 0; i < totalSliders; i++) {
//   mbnCurrentIndex[i] = 0;
//   mbnShowImage(i, mbnCurrentIndex[i]);
// }

// function mbnShowImage(sliderIndex, imageIndex) {
//   $(".mbnContImg").eq(sliderIndex).find(".mbnContImg").hide();
//   $(".mbnContImg").eq(sliderIndex).find(".mbnContImg").eq(imageIndex).show();
// }

// $(".mbnBtn.next").click(function () {
//   const sliderIndex = $(this).parent().index();
//   mbnCurrentIndex[sliderIndex] =
//     (mbnCurrentIndex[sliderIndex] + 1) % totalImages;
//   mbnShowImage(sliderIndex, mbnCurrentIndex[sliderIndex]);
// });

// $(".mbnBtn.prev").click(function () {
//   const sliderIndex = $(this).parent().index();
//   mbnCurrentIndex[sliderIndex] =
//     (mbnCurrentIndex[sliderIndex] - 1 + totalImages) % totalImages;
//   mbnShowImage(sliderIndex, mbnCurrentIndex[sliderIndex]);
// });

// main2
$(".todayBook").hover(
  function () {
    $(".btnTB").show();
  },
  function () {
    $(".btnTB").hide();
  }
);

$(".bestLi .optTit dd").hide();
$(".bestOpt").click(function (e) {
  e.preventDefault();

  $(".bestLi .optTit .bestOpt dt").toggleClass("c");
  $(".bestLi .optTit dd").toggle();
});

$("#popli").hide();
$("#best").click(function (e) {
  e.preventDefault();
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

// main3
$(".nowBookArea").hover(
  function () {
    $(".btnNB").show();
  },
  function () {
    $(".btnNB").hide();
  }
);

// main5
$(".bookClubArea").hover(
  function () {
    $(".btnBC").show();
  },
  function () {
    $(".btnBC").hide();
  }
);
$(".bookClubRgt").hover(
  function () {
    $(".btnBCR").show();
  },
  function () {
    $(".btnBCR").hide();
  }
);
