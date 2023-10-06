$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "인생", size: "24" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  console.log(data);
  $("#pGR01 .pGR_goods").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;

    $(this).find("img").attr("src", imageUrl);
    $(this).find(".goods_name a").text(bookData.title);
    $(this).find(".goods_auth").text(bookData.authors);
    $(this).find(".goods_pub").text(bookData.publisher);
    $(this).find(".yes_b").text(bookData.sale_price);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "가르침", size: "24" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $("#pGR02 .pGR_goods").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;

    $(this).find("img").attr("src", imageUrl);
    $(this).find(".goods_name a").text(bookData.title);
    $(this).find(".goods_auth").text(bookData.authors);
    $(this).find(".goods_pub").text(bookData.publisher);
    $(this).find(".yes_b").text(bookData.sale_price);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "세상", size: "40" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".tp_book ul li").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;

    $(this).find("img").attr("src", imageUrl);
    $(this).find(".goods_name a").text(bookData.title);
    $(this).find(".goods_auth").text(bookData.authors);
    $(this).find(".goods_pub").text(bookData.publisher);
    $(this).find(".yes_b").text(bookData.sale_price);
  });
});

$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "생각" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  $(".dCont_tp_list li").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;

    $(this).find("img").attr("src", imageUrl);
    $(this).find(".goods_name a").text(bookData.title);
    $(this).find(".goods_auth").text(bookData.authors);
    $(this).find(".yes_b").text(bookData.sale_price);
  });
});
