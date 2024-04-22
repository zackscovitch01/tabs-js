const about = document.querySelector(".about");
// Get all buttons
const tabBtns = document.querySelectorAll(".tab-btn");
// Get all articles
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    //  remove active state from all buttons
    tabBtns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // Hide all articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
