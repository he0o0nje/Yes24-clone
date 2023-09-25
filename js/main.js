// 로딩 시 각 컴포넌트에 보여질 컨텐츠
$(document).ready(function () {
  $("#mbn01").trigger("mouseenter");
  $("#tabs01").trigger("mouseenter");
  $("#todayBook01").trigger("mouseenter");
  $("#Multi01").trigger("click");
  $(".sec2 .clipBnSet:first").trigger("mouseenter");
  $(".sec4 .clipBnSet:first").trigger("mouseenter");
  $(".sec5 .clipBnSet:first").trigger("mouseenter");
  $(".sec6 .clipBnSet:first").trigger("mouseenter");
  $(".sec7 .clipBnSet:first").trigger("mouseenter");
  $("#TV1").trigger("mouseenter");
  $(".mbnBtn").css("display", "none");
  $(".btnTB").css("display", "none");
  $(".btnTv").css("display", "none");
});

// 슬라이드 컨테이너 호버 시 prev, next 버튼 보여주기
function addHoverEffect(selectorToShow, selectorToHide) {
  $(selectorToShow).hover(
    function () {
      $(selectorToHide).show();
    },
    function () {
      $(selectorToHide).hide();
    }
  );
}
addHoverEffect(".mbnSub", ".mbnBtn");
addHoverEffect(".todayBook", ".btnTB");
addHoverEffect(".nowBookArea", ".btnNB");
addHoverEffect(".bookClub", ".btnBC");
addHoverEffect(".bookClubRgt", ".btnBCR");
addHoverEffect("#main7", ".btnTv");
addHoverEffect(".cLTop", ".btnCT");
addHoverEffect(".cLBot", ".btnCN");
addHoverEffect(".cRTop", ".CRT");
addHoverEffect(".cRBot", ".CRB");
addHoverEffect("#main9", ".btnBn");
