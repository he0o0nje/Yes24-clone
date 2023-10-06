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

// 광고리스트
let currentIndex = 0;
const images = $(".listbox img");
const totalImages = images.length;

const showImage = (index) => {
  images.hide();
  images.eq(index).show();
};

$("#header_middle_button .prev").click(function () {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showImage(currentIndex);
});

$("#header_middle_button .next").click(function () {
  currentIndex = (currentIndex + 1) % totalImages;
  showImage(currentIndex);
});

showImage(currentIndex);

// 빠른분야찾기 메뉴
$("#quick_cate_btn")
  .mouseenter(function () {
    $(".quick_cate_wrap").show();
    $(".quick_cate_tb").hide();
  })
  .mouseleave(function () {
    $(".quick_cate_wrap").hide();
  });

$(".quick_cate_header")
  .mouseenter(function () {
    $(".quick_cate_wrap").show().stop().animate({ width: "664px" }, 200);
  })
  .mouseleave(function () {
    $(".quick_cate_wrap").hide().css("width", "auto");
  });

$(".qtit").mouseenter(function () {
  $(".qtit").css({
    color: "",
    "background-color": "",
  });
  $(this).css({
    color: "#fff",
    "background-color": "#0080ff",
  });
  $(".quick_cate_tb").hide();
  $(this).siblings(".quick_cate_tb").show();
});

$(".qtit, .quick_cate_tb").mouseleave(function () {
  if (!$(".qtit:hover").length && !$(".quick_cate_tb:hover").length) {
    $(this).css({
      color: "",
      "background-color": "",
    });
  }
});

// 푸터 가족회사 메뉴
$("#fam_dl dd").hide();

$("#fam_btn").click(function (e) {
  e.preventDefault();

  $("#fam_dl dt").toggleClass("c");

  if ($("#fam_dl dt").hasClass("c")) {
    $("#fam_dl dt").css({
      "border-bottom-color": "#d5d5d5",
      "border-radius": "3px 3px 0 0",
    });
  } else {
    $("#fam_dl dt").css({ "border-bottom-color": "", "border-radius": "" });
  }

  $("#fam_dl dd").toggle();
});

// 푸터 맨위로
$("#yesSclTop").bind("click", function () {
  $("html, body").animate({ scrollTop: "0" }, 300);
});
