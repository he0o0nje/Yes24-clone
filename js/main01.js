// Main1

// 메인배너 리스트 호버 시 css변경, 해당 컨텐츠 표시
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

// 메인배너 슬라이드

// 슬라이드 이미지의 해당 탭 CSS 변경
function YesNowSlide() {
  if ($(".mbnContImg").hasClass("active")) {
    $(".mbnContImg.active")
      .closest(".mbnRollUnit")
      .find(".tabs a em")
      .css({ "background-color": "#333", color: "#fff" });
  } else {
    $(".mbnRollUnit")
      .find(".tabs a em")
      .css({ "background-color": "", color: "" });
  }
}
YesNowSlide();
$(document).on("DOMSubtreeModified", ".mbnContImg", function () {
  YesNowSlide();
});

// Yes Now Slide
$(".mbnRoll_yNow .mbnContImg").not(".active").hide();

function MBNYprevSlide() {
  $(".mbnRoll_yNow .mbnContImg").hide();
  let allSlide = $(".mbnRoll_yNow .mbnContImg");
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

  $(".mbnRoll_yNow .mbnContImg").removeClass("active");
  $(".mbnRoll_yNow .mbnContImg").eq(newIndex).addClass("active");
  $(".mbnRoll_yNow .mbnContImg").eq(newIndex).show();
}

function MBNYnextSlide() {
  $(".mbnRoll_yNow .mbnContImg").hide();
  let allSlide = $(".mbnRoll_yNow .mbnContImg");
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

  $(".mbnRoll_yNow .mbnContImg").removeClass("active");
  $(".mbnRoll_yNow .mbnContImg").eq(newIndex).addClass("active");
  $(".mbnRoll_yNow .mbnContImg").eq(newIndex).show();
}

// 국내도서 Slide
$(".MBN1 .mbnContImg").not(".active").hide();

function MBN1prevSlide() {
  $(".MBN1 .mbnContImg").hide();
  let allSlide = $(".MBN1 .mbnContImg");
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

  $(".MBN1 .mbnContImg").removeClass("active");
  $(".MBN1 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN1 .mbnContImg").eq(newIndex).show();
}

function MBN1nextSlide() {
  $(".MBN1 .mbnContImg").hide();
  let allSlide = $(".MBN1 .mbnContImg");
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

  $(".MBN1 .mbnContImg").removeClass("active");
  $(".MBN1 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN1 .mbnContImg").eq(newIndex).show();
}

// 외국도서 Slide
$(".MBN2 .mbnContImg").not(".active").hide();

function MBN2prevSlide() {
  $(".MBN2 .mbnContImg").hide();
  let allSlide = $(".MBN2 .mbnContImg");
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

  $(".MBN2 .mbnContImg").removeClass("active");
  $(".MBN2 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN2 .mbnContImg").eq(newIndex).show();
}

function MBN2nextSlide() {
  $(".MBN2 .mbnContImg").hide();
  let allSlide = $(".MBN2 .mbnContImg");
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

  $(".MBN2 .mbnContImg").removeClass("active");
  $(".MBN2 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN2 .mbnContImg").eq(newIndex).show();
}

// 중고샵 Slide
$(".MBN3 .mbnContImg").not(".active").hide();

function MBN3prevSlide() {
  $(".MBN3 .mbnContImg").hide();
  let allSlide = $(".MBN3 .mbnContImg");
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

  $(".MBN3 .mbnContImg").removeClass("active");
  $(".MBN3 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN3 .mbnContImg").eq(newIndex).show();
}

function MBN3nextSlide() {
  $(".MBN3 .mbnContImg").hide();
  let allSlide = $(".MBN3 .mbnContImg");
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

  $(".MBN3 .mbnContImg").removeClass("active");
  $(".MBN3 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN3 .mbnContImg").eq(newIndex).show();
}

// eBook Slide
$(".MBN4 .mbnContImg").not(".active").hide();

function MBN4prevSlide() {
  $(".MBN4 .mbnContImg").hide();
  let allSlide = $(".MBN4 .mbnContImg");
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

  $(".MBN4 .mbnContImg").removeClass("active");
  $(".MBN4 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN4 .mbnContImg").eq(newIndex).show();
}

function MBN4nextSlide() {
  $(".MBN4 .mbnContImg").hide();
  let allSlide = $(".MBN4 .mbnContImg");
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

  $(".MBN4 .mbnContImg").removeClass("active");
  $(".MBN4 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN4 .mbnContImg").eq(newIndex).show();
}

// 크레마클럽 Slide
$(".MBN5 .mbnContImg").not(".active").hide();

function MBN5prevSlide() {
  $(".MBN5 .mbnContImg").hide();
  let allSlide = $(".MBN5 .mbnContImg");
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

  $(".MBN5 .mbnContImg").removeClass("active");
  $(".MBN5 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN5 .mbnContImg").eq(newIndex).show();
}

function MBN5nextSlide() {
  $(".MBN5 .mbnContImg").hide();
  let allSlide = $(".MBN5 .mbnContImg");
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

  $(".MBN5 .mbnContImg").removeClass("active");
  $(".MBN5 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN5 .mbnContImg").eq(newIndex).show();
}

// CD/LP Slide
$(".MBN6 .mbnContImg").not(".active").hide();

function MBN6prevSlide() {
  $(".MBN6 .mbnContImg").hide();
  let allSlide = $(".MBN6 .mbnContImg");
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

  $(".MBN6 .mbnContImg").removeClass("active");
  $(".MBN6 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN6 .mbnContImg").eq(newIndex).show();
}

function MBN6nextSlide() {
  $(".MBN6 .mbnContImg").hide();
  let allSlide = $(".MBN6 .mbnContImg");
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

  $(".MBN6 .mbnContImg").removeClass("active");
  $(".MBN6 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN6 .mbnContImg").eq(newIndex).show();
}

// DVD/BD Slide
$(".MBN7 .mbnContImg").not(".active").hide();

function MBN7prevSlide() {
  $(".MBN7 .mbnContImg").hide();
  let allSlide = $(".MBN7 .mbnContImg");
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

  $(".MBN7 .mbnContImg").removeClass("active");
  $(".MBN7 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN7 .mbnContImg").eq(newIndex).show();
}

function MBN7nextSlide() {
  $(".MBN7 .mbnContImg").hide();
  let allSlide = $(".MBN7 .mbnContImg");
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

  $(".MBN7 .mbnContImg").removeClass("active");
  $(".MBN7 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN7 .mbnContImg").eq(newIndex).show();
}

// 문구/GIFT Slide
$(".MBN8 .mbnContImg").not(".active").hide();

function MBN8prevSlide() {
  $(".MBN8 .mbnContImg").hide();
  let allSlide = $(".MBN8 .mbnContImg");
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

  $(".MBN8 .mbnContImg").removeClass("active");
  $(".MBN8 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN8 .mbnContImg").eq(newIndex).show();
}

function MBN8nextSlide() {
  $(".MBN8 .mbnContImg").hide();
  let allSlide = $(".MBN8 .mbnContImg");
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

  $(".MBN8 .mbnContImg").removeClass("active");
  $(".MBN8 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN8 .mbnContImg").eq(newIndex).show();
}

// 티켓 Slide
$(".MBN9 .mbnContImg").not(".active").hide();

function MBN9prevSlide() {
  $(".MBN9 .mbnContImg").hide();
  let allSlide = $(".MBN9 .mbnContImg");
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

  $(".MBN9 .mbnContImg").removeClass("active");
  $(".MBN9 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN9 .mbnContImg").eq(newIndex).show();
}

function MBN9nextSlide() {
  $(".MBN9 .mbnContImg").hide();
  let allSlide = $(".MBN9 .mbnContImg");
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

  $(".MBN9 .mbnContImg").removeClass("active");
  $(".MBN9 .mbnContImg").eq(newIndex).addClass("active");
  $(".MBN9 .mbnContImg").eq(newIndex).show();
}
