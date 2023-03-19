// changing header background color on scroll
let navSec = document.getElementById("navSec");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navSec.classList.add("navSecBg");
  } else {
    navSec.classList.remove("navSecBg");
  }
});

// const logo = document.getElementById('logo');

// logo.addEventListener('click', (event) => {
//   event.preventDefault();
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

// creating a scroll to top effect
const logo = document.getElementById("logo");

logo.addEventListener("click", (event) => {
  event.preventDefault();
  const scrollToTop = window.setInterval(() => {
    const pos = window.scrollY;
    if (pos > 0) {
      window.scrollTo(0, pos - 50);
    } else {
      window.clearInterval(scrollToTop);
    }
  }, 16);
});

//form validation
const form = document.getElementById("form");
const submit = document.getElementById("submit");
const errMsg = document.getElementById("error-message");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent form submission

  const input = document.getElementById("email").value;

  if (input == "") {
    errMsg.innerHTML = "Please enter a valid email address.";
  } else {
    errMsg.innerHTML = "";
    submit.disabled = true;
    submit.innerText = "Please Wait...";
    setTimeout(() => {
      const sucMsg = (document.getElementById("success-message").style.display =
        "block");
      submit.innerText = "Submit";
      setTimeout(() => {
        window.location.reload(true);
      }, 3000);
    }, 2000);
  }
});
