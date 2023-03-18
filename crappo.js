let navSec = document.getElementById("navSec");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navSec.classList.add("navSecBg");
  } else {
    navSec.classList.remove("navSecBg");
  }
});

const logo = document.getElementById("logo");

logo.addEventListener("click", (event) => {
  event.preventDefault();
  const scrollToTop = window.setInterval(() => {
    const pos = window.pageYOffset;
    if (pos > 0) {
      window.scrollTo(0, pos - 50);
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 16);
});
