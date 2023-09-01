const myPageMenu = document.querySelector(
  "#header_top_right li:nth-child(3) a"
);
const dropupMenu = document.querySelector("#mypage");

myPageMenu.addEventListener("mouseenter", () => {
  dropupMenu.style.display = "block";
});

myPageMenu.addEventListener("mouseleave", () => {
  dropupMenu.style.display = "none";
});

dropupMenu.addEventListener("mouseenter", () => {
  dropupMenu.style.display = "block";
});

dropupMenu.addEventListener("mouseleave", () => {
  dropupMenu.style.display = "none";
});
