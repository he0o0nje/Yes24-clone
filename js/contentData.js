// Main2

// 가운데
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "미래의 책" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".todayBUnit").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;
    let temp_html = `${bookData.authors} 저
                    <em class="divi">|</em>
                    ${bookData.publisher}`;

    $(".tBThumb img").eq(i).attr("src", imageUrl);
    $(".tB_img img").eq(i).attr("src", imageUrl);
    $(".tB_readTit a").eq(i).text(bookData.title);
    $(".tB_readCon a").eq(i).text(bookData.contents);
    $(".tB_name a").eq(i).text(bookData.title);
    $(".tB_pub").eq(i).append(temp_html);
    $(".yes_b").eq(i).text(bookData.sale_price);
  });
});

// 오른쪽
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "제이쿼리" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".tp02").each(function (i) {
    const bestData = data.documents[i];
    let imageUrl = bestData.thumbnail;

    $(".rnk_img img").eq(i).attr("src", imageUrl);
    $(".rnk_info strong").eq(i).text(bestData.title);
    $(".rnk_info em")
      .eq(i)
      .text(bestData.authors + " 저");
  });
});

// Main3
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "리액트" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".nowBookLi").each(function (i, element) {
    const NBData = data.documents[i];
    if (NBData) {
      let imageUrl = NBData.thumbnail;
      let temp_html = `<span class="goods_auth">${NBData.authors} 저</span>
                      <em class="divi">|</em>
                      <span class="goods_pub">${NBData.publisher}</span>`;

      $(element).find(".imgbox a img").attr("src", imageUrl);
      $(element).find(".goods_info .goods_tCmt em").text(NBData.contents);
      $(element).find(".goods_info .goods_name a").text(NBData.title);
      $(element).find(".goods_info .goods_pubGrp").append(temp_html);
      $(element).find(".goods_info .yes_b").text(NBData.price);
    }
  });
});

/// Main5
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "플러터" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".bookClubLi").each(function (i, element) {
    const BCData = data.documents[i];
    if (BCData) {
      let imageUrl = BCData.thumbnail;
      let temp_html = `<span class="goods_auth">${BCData.authors} 저</span>
                      <em class="divi">|</em>
                      <span class="goods_pub">${BCData.publisher}</span>`;

      $(element).find(".imgbox a img").attr("src", imageUrl);
      $(element).find(".goods_info .goods_name a").text(BCData.title);
      $(element).find(".goods_info .goods_pubGrp").append(temp_html);
      $(element).find(".goods_info .yes_b").text(BCData.price);
    }
  });
});

// Main6

// Multi01
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "웹개발" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#MTS1 .bookLi").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_cmt").text(MultiData.contents);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .goods_auth").text(MultiData.authors);
    $(this).find(".book_info .goods_pub").text(MultiData.publisher);
    $(this).find(".book_info .yes_b").text(MultiData.sale_price);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "한국 근대" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M1BotBook").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
  });
});

// Multi02
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "GPT" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#MTS2 .bookLi").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .yes_b").text(MultiData.sale_price);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "라이브러리" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M2BotBook").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
  });
});

// Multi03
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "시장" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#MTS3 .bookLi").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_cmt").text(MultiData.contents);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .yes_b").text(MultiData.sale_price);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "오디오" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M3BotBook li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .yes_b").text(MultiData.price);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "사치코" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#M3BotRight").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_cmt").text(MultiData.contents);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .yes_b").text(MultiData.sale_price);
  });
});

// Multi04
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "집착광공" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#MTS4 .bookBigCon").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;
    let temp_html = `${MultiData.authors}
    <em class="goods_divi">|</em>
    ${MultiData.publishers}
    <em class="goods_divi">|</em>
    5화 무료
    <em class="goods_divi">|</em>
    ${MultiData.price}원`;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .book_pubGrp").append(temp_html);
    $(this).find(".book_info .book_readTit").text(MultiData.status);
    $(this).find(".book_info .book_readCon").text(MultiData.contents);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "마술" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#MTS401 .bookBigCon li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .book_auth").text(MultiData.authors);
    $(this).find(".book_info .book_pub").text(MultiData.publisher);
    $(this).find(".book_info .book_readTit").text(MultiData.status);
    $(this).find(".book_info .book_readCon").text(MultiData.contents);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "코믹" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M4BotBook li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .yes_b").text(MultiData.price);
  });
});

// Multi05
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "end" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#MTS5 .bookBigCon li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .yes_b").text(MultiData.sale_price);
    $(this).find(".book_info .book_cmt").text(MultiData.contents);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "time" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M5BotBook li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .book_price em").text(MultiData.price);
  });
});

// Multi06
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "하루하루" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".m6s1").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this)
      .find(".book_info .price_dim")
      .text(MultiData.price + " →");
    $(this).find(".book_info .yes_b").text(MultiData.sale_price);
    $(this).find(".book_info .book_cmt").text(MultiData.contents);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "카메라" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".m6s2 li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_etc").text(MultiData.status);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .book_cmt").text(MultiData.contents);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "태양" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M6BotBook li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .book_price em").text(MultiData.sale_price);
  });
});

// Multi07
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "휴식" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M7BotBook li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".book_info .book_name a").text(MultiData.title);
    $(this).find(".book_info .book_price em").text(MultiData.price);
  });
});

// Multi08
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "콘서트" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".M8BotBook li").each(function (i) {
    const MultiData = data.documents[i];
    let imageUrl = MultiData.thumbnail;

    $(this).find(".book_img a img").attr("src", imageUrl);
    $(this).find(".tic_info .tic_name a").text(MultiData.title);
    $(this).find(".tic_info .tic_des").text(MultiData.publisher);
  });
});

// Main7
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "트렌드" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".TvSub").each(function (i) {
    const TVData = data.documents[i];
    let imageUrl = TVData.thumbnail;

    $(this).find(".TvSubGrp a img").attr("src", imageUrl);
    $(this).find(".TvSubExp .subCmt").text(TVData.contents);
    $(this).find(".TvSubExp .subTit a").text(TVData.title);
    $(this).find(".subPub .auth").text(TVData.authors);
    $(this).find(".subPub .pub").text(TVData.publisher);
  });
});

// Main8
$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "나를" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".cardBookUnit").each(function (i) {
    const CardData = data.documents[i];
    let imageUrl = CardData.thumbnail;

    $(this).find(".bookImg img").attr("src", imageUrl);
    $(this).find(".bookCmt").text(CardData.contents);
    $(this).find(".bookInfo .bookName").text(CardData.title);
    $(this).find(".bookPub .auth").text(CardData.authors);
    $(this).find(".bookPub .pub").text(CardData.publisher);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "아파트" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".cRTop .rowGrp li").each(function (i) {
    const CardData = data.documents[i];
    let imageUrl = CardData.thumbnail;

    $(this).find(".titles_thumb img").attr("src", imageUrl);
    $(this).find(".titles_info .titles_tit").text(CardData.title);
    $(this).find(".titles_info .titles_des").text(CardData.contents);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "블로그" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".cRBot .rowGrp li").each(function (i) {
    const CardData = data.documents[i];
    let imageUrl = CardData.thumbnail;

    $(this).find(".titles_thumb img").attr("src", imageUrl);
    $(this).find(".titles_info .titles_tit").text(CardData.title);
    $(this).find(".titles_info .titles_des").text(CardData.contents);
  });
});
