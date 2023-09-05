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
  $(".mbnSub").css("display", "none");
  $(this).parents().siblings(".mbnSub").css("display", "block");
  $(".mbnContImg").css("display", "block");
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
  $(".mbnContImg").css("display", "none");
  $(this).siblings(".mbnContImg").css("display", "block");
});

$(".mbnSub").hover(
  function () {
    $(".mbnBtn").css({ display: "block" });
  },
  function () {
    $(".mbnBtn").css({ display: "none" });
  }
);

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
