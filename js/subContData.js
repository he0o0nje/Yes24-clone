$.ajax({
  method: "GET",
  url: "https://dapi.kakao.com/v3/search/book?target=title",
  data: { query: "가르침" },
  headers: { Authorization: "KakaoAK 34c497c35774425c1c37314d61072948" },
}).done(function (data) {
  console.log(data);
  $(".pGR_goods").each(function (i) {
    const bookData = data.documents[i];
    let imageUrl = bookData.thumbnail;

    $(".pGR_goods img").eq(i).attr("src", imageUrl);
    $(".pGR_goods .goods_name a").eq(i).text(bookData.title);
    $(".pGR_goods .goods_auth").eq(i).text(bookData.authors);
    $(".pGR_goods .goods_pub").eq(i).text(bookData.publisher);
    $(".pGR_goods .yes_b").eq(i).text(bookData.sale_price);
  });
});
