// Main3

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기
$(".nowBookSet").not(".active").hide();

function NBprevSlide() {
  $(".nowBookSet").hide();
  let allSlide = $(".nowBookSet");
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

  $(".nowBookSet").removeClass("active");
  $(".nowBookSet").eq(newIndex).addClass("active");
  $(".nowBookSet").eq(newIndex).show();

  $(".nowBookArea .pageNum strong").text(newIndex + 1);
}

function NBnextSlide() {
  $(".nowBookSet").hide();
  let allSlide = $(".nowBookSet");
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

  $(".nowBookSet").removeClass("active");
  $(".nowBookSet").eq(newIndex).addClass("active");
  $(".nowBookSet").eq(newIndex).show();

  $(".nowBookArea .pageNum strong").text(newIndex + 1);
}
