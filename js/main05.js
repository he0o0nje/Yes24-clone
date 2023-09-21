// Main5

// 이전, 다음 버튼 클릭 시 해당 왼쪽 컨텐츠 보이기 (BookClub)
$(".bookClub .bookClubSet").not(".active").hide();

function BCprevSlide() {
  $(".bookClub .bookClubSet").hide();
  let allSlide = $(".bookClub .bookClubSet");
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

  $(".bookClub .bookClubSet").removeClass("active");
  $(".bookClub .bookClubSet").eq(newIndex).addClass("active");
  $(".bookClub .bookClubSet").eq(newIndex).show();

  $(".bookClub .pageNum strong").text(newIndex + 1);
}

function BCnextSlide() {
  $(".bookClub .bookClubSet").hide();
  let allSlide = $(".bookClub .bookClubSet");
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

  $(".bookClub .bookClubSet").removeClass("active");
  $(".bookClub .bookClubSet").eq(newIndex).addClass("active");
  $(".bookClub .bookClubSet").eq(newIndex).show();

  $(".bookClub .pageNum strong").text(newIndex + 1);
}

// 이전, 다음 버튼 클릭 시 해당 오른쪽 컨텐츠 보이기 (BookClubRight)
$(".bookClubRgt .bookClubSet").not(".active").hide();

function BCRprevSlide() {
  $(".bookClubRgt .bookClubSet").hide();
  let allSlide = $(".bookClubRgt .bookClubSet");
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

  $(".bookClubRgt .bookClubSet").removeClass("active");
  $(".bookClubRgt .bookClubSet").eq(newIndex).addClass("active");
  $(".bookClubRgt .bookClubSet").eq(newIndex).show();

  $(".bookClubRgt .pageNum strong").text(newIndex + 1);
}

function BCRnextSlide() {
  $(".bookClubRgt .bookClubSet").hide();
  let allSlide = $(".bookClubRgt .bookClubSet");
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

  $(".bookClubRgt .bookClubSet").removeClass("active");
  $(".bookClubRgt .bookClubSet").eq(newIndex).addClass("active");
  $(".bookClubRgt .bookClubSet").eq(newIndex).show();

  $(".bookClubRgt .pageNum strong").text(newIndex + 1);
}
