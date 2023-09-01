// 마이페이지 메뉴
const myPageMenu = document.querySelector(
  "#header_top_right li:nth-child(3) a"
);
const dropupMenu = document.querySelector("#mypage");

myPageMenu.addEventListener("mouseenter", () => {
  dropupMenu.style.display = "block";
});

myPageMenu.addEventListener("mouseleave", () => {
  dropupMenu.style.display = "none";
});

dropupMenu.addEventListener("mouseenter", () => {
  dropupMenu.style.display = "block";
});

dropupMenu.addEventListener("mouseleave", () => {
  dropupMenu.style.display = "none";
});

// 빠른분야찾기 메뉴
const quickCateBtn = document.getElementById("quick_cate_btn");
const quickCateWrap = document.querySelector(".quick_cate_wrap");

quickCateBtn.addEventListener("mouseenter", () => {
  quickCateWrap.style.display = "block";
});

quickCateBtn.addEventListener("mouseleave", () => {
  quickCateWrap.style.display = "none";
  $(".quick_cate_wrap").css({ width: "auto" });
});

quickCateWrap.addEventListener("mouseenter", () => {
  quickCateWrap.style.display = "block";
  $(".quick_cate_wrap").animate({ width: "664px" }, 200);
});

quickCateWrap.addEventListener("mouseleave", () => {
  quickCateWrap.style.display = "none";
  $(".quick_cate_wrap").css({ width: "auto" });
});

$(".qtit").mouseenter(function () {
  $(this).css({
    color: "#fff",
    "background-color": "#0080ff",
  });
  $(this).siblings(".quick_cate_tb").css("display", "block");
  $(this).append('<span class="qtit_hover"></span>');
});

$(".qtit").mouseleave(function () {
  $(this).css({
    color: "",
    "background-color": "",
  });
  $(this).siblings(".quick_cate_tb").css("display", "none");
  $(this).find(".qtit_hover").remove();
});
