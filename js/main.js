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
  $(".mbnContImg").css("display", "none");
  $(this).siblings(".mbnContImg").css("display", "block");
});
