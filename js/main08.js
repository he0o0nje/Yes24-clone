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
$(".cLBot .CN2, .cLBot .CN3").hide();
$(".CN1 img").not(".active").hide();

function CBLB1prevSlide() {
  $(".CN1 img").hide();
  let allSlide = $(".CN1 img");
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

  $(".CN1 img").removeClass("active");
  $(".CN1 img").eq(newIndex).addClass("active");
  $(".CN1 img").eq(newIndex).show();
}

function CBLB1nextSlide() {
  $(".CN1 img").hide();
  let allSlide = $(".CN1 img");
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

  $(".CN1 img").removeClass("active");
  $(".CN1 img").eq(newIndex).addClass("active");
  $(".CN1 img").eq(newIndex).show();
}

$(".CN2 img").not(".active").hide();

function CBLB2prevSlide() {
  $(".CN2 img").hide();
  let allSlide = $(".CN2 img");
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

  $(".CN2 img").removeClass("active");
  $(".CN2 img").eq(newIndex).addClass("active");
  $(".CN2 img").eq(newIndex).show();
}

function CBLB2nextSlide() {
  $(".CN2 img").hide();
  let allSlide = $(".CN2 img");
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

  $(".CN2 img").removeClass("active");
  $(".CN2 img").eq(newIndex).addClass("active");
  $(".CN2 img").eq(newIndex).show();
}

$(".CN3 img").not(".active").hide();

function CBLB3prevSlide() {
  $(".CN3 img").hide();
  let allSlide = $(".CN3 img");
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

  $(".CN3 img").removeClass("active");
  $(".CN3 img").eq(newIndex).addClass("active");
  $(".CN3 img").eq(newIndex).show();
}

function CBLB3nextSlide() {
  $(".CN3 img").hide();
  let allSlide = $(".CN3 img");
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

  $(".CN3 img").removeClass("active");
  $(".CN3 img").eq(newIndex).addClass("active");
  $(".CN3 img").eq(newIndex).show();
}

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기 (CardBookRightTop)
$(".cRTop .rowGrp ul").not(".active").hide();

function CBRTprevSlide() {
  $(".cRTop .rowGrp ul").hide();
  let allSlide = $(".cRTop .rowGrp ul");
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

  $(".cRTop .rowGrp ul").removeClass("active");
  $(".cRTop .rowGrp ul").eq(newIndex).addClass("active");
  $(".cRTop .rowGrp ul").eq(newIndex).show();

  $(".cRTop .pageNum strong").text(newIndex + 1);
}

function CBRTnextSlide() {
  $(".cRTop .rowGrp ul").hide();
  let allSlide = $(".cRTop .rowGrp ul");
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

  $(".cRTop .rowGrp ul").removeClass("active");
  $(".cRTop .rowGrp ul").eq(newIndex).addClass("active");
  $(".cRTop .rowGrp ul").eq(newIndex).show();

  $(".cRTop .pageNum strong").text(newIndex + 1);
}

// 이전, 다음 버튼 클릭 시 해당 컨텐츠 보이기 (CardBookRightBottom)
$(".cRBot .rowGrp ul").not(".active").hide();

function CBRBprevSlide() {
  $(".cRBot .rowGrp ul").hide();
  let allSlide = $(".cRBot .rowGrp ul");
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

  $(".cRBot .rowGrp ul").removeClass("active");
  $(".cRBot .rowGrp ul").eq(newIndex).addClass("active");
  $(".cRBot .rowGrp ul").eq(newIndex).show();

  $(".cRBot .pageNum strong").text(newIndex + 1);
}

function CBRBnextSlide() {
  $(".cRBot .rowGrp ul").hide();
  let allSlide = $(".cRBot .rowGrp ul");
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

  $(".cRBot .rowGrp ul").removeClass("active");
  $(".cRBot .rowGrp ul").eq(newIndex).addClass("active");
  $(".cRBot .rowGrp ul").eq(newIndex).show();

  $(".cRBot .pageNum strong").text(newIndex + 1);
}
