const navBtn = document.querySelector(".btn-icon");
const closeBtn = document.querySelector(".close-btn");
const sideBar = document.querySelector(".side-bar");
const singleCard = document.querySelectorAll(".single-card");
const cryptoBtn = document.querySelectorAll(".crypto-btn");
const cryptoIcon = document.querySelectorAll(".crypto-icon");

navBtn.addEventListener("click", function () {
  ShowSideBar = sideBar.classList.contains("show-sidebar");
  if (!ShowSideBar) {
    sideBar.classList.add("show-sidebar");
  }
});

closeBtn.addEventListener("click", function () {
  ShowSideBar = sideBar.classList.contains("show-sidebar");
  if (ShowSideBar) {
    sideBar.classList.remove("show-sidebar");
  }
  console.log(closeBtn);
});

// remove active class from each card
function removeActive() {
  singleCard.forEach(function (card) {
    card.classList.remove("active");
  });
}

// card event listener
singleCard.forEach(function (card) {
  card.addEventListener("click", function (e) {
    removeActive();
    // console.log(e.currentTarget);
    const active = e.currentTarget.classList.add("active");
  });
});
