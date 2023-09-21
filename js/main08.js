// Main8

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기 (CardBookLeftTop)
$(".cardBookUnit").not(".active").hide();

function CBLTprevSlide() {
  $(".cardBookUnit").hide();
  let allSlide = $(".cardBookUnit");
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

  $(".cardBookUnit").removeClass("active");
  $(".cardBookUnit").eq(newIndex).addClass("active");
  $(".cardBookUnit").eq(newIndex).show();

  $(".cLTop .pageNum strong").text(newIndex + 1);

  $(".cardNews").hide();
  $(".cardNews:eq(" + newIndex + ")").show();
}

function CBLTnextSlide() {
  $(".cardBookUnit").hide();
  let allSlide = $(".cardBookUnit");
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

  $(".cardBookUnit").removeClass("active");
  $(".cardBookUnit").eq(newIndex).addClass("active");
  $(".cardBookUnit").eq(newIndex).show();

  $(".cLTop .pageNum strong").text(newIndex + 1);

  $(".cardNews").hide();
  $(".cardNews:eq(" + newIndex + ")").show();
}

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기 (CardBookLeftBottom)
$(".cardNews img").not(".active").hide();

function CBLBprevSlide() {
  $(".cardNews img").hide();
  let allSlide = $(".cardNews img");
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

  $(".cardNews img").removeClass("active");
  $(".cardNews img").eq(newIndex).addClass("active");
  $(".cardNews img").eq(newIndex).show();
}

function CBLBnextSlide() {
  $(".cardNews img").hide();
  let allSlide = $(".cardNews img");
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

  $(".cardNews img").removeClass("active");
  $(".cardNews img").eq(newIndex).addClass("active");
  $(".cardNews img").eq(newIndex).show();
}

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기 (CardBookRightTop)
$(".cRTop .rowGrp").not(".active").hide();

function CBRTprevSlide() {
  $(".cRTop .rowGrp").hide();
  let allSlide = $(".cRTop .rowGrp");
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

  $(".cRTop .rowGrp").removeClass("active");
  $(".cRTop .rowGrp").eq(newIndex).addClass("active");
  $(".cRTop .rowGrp").eq(newIndex).show();

  $(".cRTop .pageNum strong").text(newIndex + 1);
}

function CBRTnextSlide() {
  $(".cRTop .rowGrp").hide();
  let allSlide = $(".cRTop .rowGrp");
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

  $(".cRTop .rowGrp").removeClass("active");
  $(".cRTop .rowGrp").eq(newIndex).addClass("active");
  $(".cRTop .rowGrp").eq(newIndex).show();

  $(".cRTop .pageNum strong").text(newIndex + 1);
}

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기 (CardBookRightBottom)
$(".cRBot .rowGrp").not(".active").hide();

function CBRBprevSlide() {
  $(".cRBot .rowGrp").hide();
  let allSlide = $(".cRBot .rowGrp");
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

  $(".cRBot .rowGrp").removeClass("active");
  $(".cRBot .rowGrp").eq(newIndex).addClass("active");
  $(".cRBot .rowGrp").eq(newIndex).show();

  $(".cRBot .pageNum strong").text(newIndex + 1);
}

function CBRBnextSlide() {
  $(".cRBot .rowGrp").hide();
  let allSlide = $(".cRBot .rowGrp");
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

  $(".cRBot .rowGrp").removeClass("active");
  $(".cRBot .rowGrp").eq(newIndex).addClass("active");
  $(".cRBot .rowGrp").eq(newIndex).show();

  $(".cRBot .pageNum strong").text(newIndex + 1);
}
