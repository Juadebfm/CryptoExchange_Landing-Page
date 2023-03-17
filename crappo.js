let navSec = document.getElementById("navSec");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navSec.classList.add("navSecBg");
  } else {
    navSec.classList.remove("navSecBg");
  }
});
