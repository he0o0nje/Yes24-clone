// Main6

// 멀티페이지 리스트 클릭 시 css변경, 해당 내용 보이기
$(".multiSecUnit h2").click(function () {
  $(".multiSecUnit h2").css({
    "background-color": "",
  });
  $(".multiSecUnit h2 a").css({
    "border-bottom": "",
  });
  $(this).css({
    "background-color": "#fff",
  });
  $(this).find("a").css({
    "border-bottom": "none",
  });
  $(".multiConArea").hide();
  $(this).siblings(".multiConArea").show();
});

// 슬라이드 컨테이너 호버 시 prev, next 버튼 보여주기
function M6addHoverEffect(M6selectorToShow) {
  $(M6selectorToShow).hover(
    function () {
      $(this).find(".btnMC").show();
    },
    function () {
      $(this).find(".btnMC").hide();
    }
  );
}
M6addHoverEffect("#MTS1");
M6addHoverEffect("#MTS2");
M6addHoverEffect("#MTS3");
M6addHoverEffect("#MTS4");
M6addHoverEffect("#MTS401");
M6addHoverEffect("#MTS5");
M6addHoverEffect("#MTS6");
M6addHoverEffect("#MTS8");
M6addHoverEffect(".sector04");

// 도서 Slide
$("#MTS1 .bookBigCon ul").not(".active").hide();

function MTS1prevSlide() {
  let allSlide = $("#MTS1 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS1 .pageNum strong").text(newIndex + 1);
}

function MTS1nextSlide() {
  let allSlide = $("#MTS1 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS1 .pageNum strong").text(newIndex + 1);
}

// 중고샵 Slide
$("#MTS2 .bookBigCon ul").not(".active").hide();

function MTS2prevSlide() {
  let allSlide = $("#MTS2 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS2 .pageNum strong").text(newIndex + 1);
}

function MTS2nextSlide() {
  let allSlide = $("#MTS2 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS2 .pageNum strong").text(newIndex + 1);
}

// eBook Slide
$("#MTS3 .bookBigCon ul").not(".active").hide();

function MTS3prevSlide() {
  let allSlide = $("#MTS3 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS3 .pageNum strong").text(newIndex + 1);
}

function MTS3nextSlide() {
  let allSlide = $("#MTS3 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS3 .pageNum strong").text(newIndex + 1);
}

// 웹소설/코믹 Slide
$("#MTS4 .bookBigCon .WCsec").not(".active").hide();

function MTS4prevSlide() {
  let allSlide = $("#MTS4 .bookBigCon .WCsec");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS4 .pageNum strong").text(newIndex + 1);
}

function MTS4nextSlide() {
  let allSlide = $("#MTS4 .bookBigCon .WCsec");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS4 .pageNum strong").text(newIndex + 1);
}

$("#MTS401 .bookBigCon ul").not(".active").hide();

function MTS401prevSlide() {
  let allSlide = $("#MTS401 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS40101 .pageNum strong").text(newIndex + 1);
}

function MTS401nextSlide() {
  let allSlide = $("#MTS401 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS401 .pageNum strong").text(newIndex + 1);
}

$(".sector04 .M4BotBook ul").not(".active").hide();

function MTS4BprevSlide() {
  let allSlide = $(".sector04 .M4BotBook ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $(".sector04 .pageNum strong").text(newIndex + 1);
}

function MTS4BnextSlide() {
  let allSlide = $(".sector04 .M4BotBook ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $(".sector04 .pageNum strong").text(newIndex + 1);
}

// CD/LP Slide
$("#MTS5 .bookBigCon ul").not(".active").hide();

function MTS5prevSlide() {
  let allSlide = $("#MTS5 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS5 .pageNum strong").text(newIndex + 1);
}

function MTS5nextSlide() {
  let allSlide = $("#MTS5 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS5 .pageNum strong").text(newIndex + 1);
}

// DVD/BD Slide
$("#MTS6 .bookBigCon ul").not(".active").hide();

function MTS6prevSlide() {
  let allSlide = $("#MTS6 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS6 .pageNum strong").text(newIndex + 1);
}

function MTS6nextSlide() {
  let allSlide = $("#MTS6 .bookBigCon ul");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS6 .pageNum strong").text(newIndex + 1);
}

// 문구/GIFT Slide

// 티켓 Slide
$("#MTS8 .bookBigCon .Tsec").not(".active").hide();

function MTS8prevSlide() {
  let allSlide = $("#MTS8 .bookBigCon .Tsec");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS8 .pageNum strong").text(newIndex + 1);
}

function MTS8nextSlide() {
  let allSlide = $("#MTS8 .bookBigCon .Tsec");
  let currentIndex = 0;
  allSlide.hide();

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

  allSlide.removeClass("active");
  allSlide.eq(newIndex).addClass("active");
  allSlide.eq(newIndex).show();

  $("#MTS8 .pageNum strong").text(newIndex + 1);
}
