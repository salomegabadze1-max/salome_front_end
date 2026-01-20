
// scrol-up
document.addEventListener("DOMContentLoaded", function () {
  const scrollBtn = document.getElementById("scrollup");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      scrollBtn.style.display = "flex";
    } else {
      scrollBtn.style.display = "none";
    }
  });

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


// cookieee


document.addEventListener("DOMContentLoaded", () => {
  const cookieBanner = document.getElementById("cookieBanner");
  const acceptCookies = document.getElementById("acceptCookies");

  if (localStorage.getItem("cookiesAccepted") === "true") {
    cookieBanner.style.display = "none";
  }

  acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookiesAccepted", "true");
    cookieBanner.style.display = "none";
  });
});



// burger bar

const burgerBtn = document.getElementById("burgerBtn");
const navMenu = document.querySelector(".nav");
const burgerIcon = burgerBtn.querySelector("i");

burgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  if (navMenu.classList.contains("active")) {
    burgerIcon.classList.remove("fa-bars");
    burgerIcon.classList.add("fa-xmark");
  } else {
    burgerIcon.classList.remove("fa-xmark");
    burgerIcon.classList.add("fa-bars");
  }
});


// სუბს
const subscribeForm = document.getElementById("subscribeForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const formError = document.getElementById("formError");

subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formError.textContent = "";
  emailInput.classList.remove("error");
  passwordInput.classList.remove("error");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

  if (!email || !password) {
    formError.textContent = "All fields are required";
    if (!email) emailInput.classList.add("error");
    if (!password) passwordInput.classList.add("error");
    return;
  }

  if (!emailRegex.test(email)) {
    formError.textContent = "Please enter a valid email address";
    emailInput.classList.add("error");
    return;
  }

  if (!passwordRegex.test(password)) {
    formError.textContent =
      "Password must contain at least 1 uppercase letter and 1 number";
    passwordInput.classList.add("error");
    return;
  }

  formError.style.color = "green";
  formError.textContent = "Subscribed successfully!";
  subscribeForm.reset();
});

/* Show / Hide password */
togglePassword.addEventListener("click", () => {
  passwordInput.type =
    passwordInput.type === "password" ? "text" : "password";

  togglePassword.classList.toggle("fa-eye");
  togglePassword.classList.toggle("fa-eye-slash");
});


// ჩვენი იუზერები
const usersGrid = document.querySelector('.users-grid');

const apiURL = 'https://randomuser.me/api/?results=5';

async function loadUsers() {
  try {
    const response = await fetch(apiURL);
    const data = await response.json();

    data.results.forEach(user => {
      const card = document.createElement('div');
      card.classList.add('user-card');
      card.innerHTML = `
                <img src="${user.picture.medium}" alt="${user.name.first} ${user.name.last}">
                <h3>${user.name.first} ${user.name.last}</h3>
                <p>${user.email}</p>
            `;
      usersGrid.appendChild(card);
    });
  } catch (error) {
    console.error('Error loading users:', error);
    usersGrid.innerHTML = "<p>Failed to load users. Please try again later.</p>";
  }
}

loadUsers();

