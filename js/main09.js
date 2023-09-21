// Main9

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기 (LAST)
$(".bnImgSet").not(".active").hide();

function LAprevSlide() {
  $(".bnImgSet").hide();
  let allSlide = $(".bnImgSet");
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

  $(".bnImgSet").removeClass("active");
  $(".bnImgSet").eq(newIndex).addClass("active");
  $(".bnImgSet").eq(newIndex).show();

  $("#main9 .pageNum strong").text(newIndex + 1);
}

function LAnextSlide() {
  $(".bnImgSet").hide();
  let allSlide = $(".bnImgSet");
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

  $(".bnImgSet").removeClass("active");
  $(".bnImgSet").eq(newIndex).addClass("active");
  $(".bnImgSet").eq(newIndex).show();

  $("#main9 .pageNum strong").text(newIndex + 1);
}
