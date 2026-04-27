// ==========================
// HERO SLIDER
// ==========================
let index = 0;
const slides = document.querySelectorAll(".slide");

function showSlide() {
    slides.forEach(s => s.style.display = "none");

    index++;
    if (index > slides.length) index = 1;

    slides[index - 1].style.display = "block";

    setTimeout(showSlide, 3000);
}

if (slides.length > 0) {
    showSlide();
}

// ==========================
// REGISTER SYSTEM
// ==========================
const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("regName").value;
        const email = document.getElementById("regEmail").value;
        const pass = document.getElementById("regPass").value;

        localStorage.setItem("user", JSON.stringify({ name, email, pass }));

        alert("🎉 Account created successfully!");
        window.location.href = "login.html";
    });
}

// ==========================
// LOGIN SYSTEM
// ==========================
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("loginEmail").value;
        const pass = document.getElementById("loginPassword").value;
        const user = JSON.parse(localStorage.getItem("user"));

        if (user && user.email === email && user.pass === pass) {
            alert("✅ Login successful!");
            window.location.href = "order.html";
        } else {
            alert("❌ Invalid credentials");
        }
    });
}

// ==========================
// ORDER SYSTEM
// ==========================
const orderForm = document.getElementById("orderForm");

if (orderForm) {
    orderForm.addEventListener("submit", function (e) {
        e.preventDefault();
        window.location.href = "thanks.html";
    });
}// ==========================
// SHOW SELECTED PRODUCT
// ==========================
const productTitle = document.getElementById("selectedProduct");

if (productTitle) {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    if (product) {
        productTitle.innerText = "You are ordering: " + product;
    }
}