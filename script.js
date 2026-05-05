// 1. Mobile Menu
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// 2. Slider Logic
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function moveSlider() {
    if (slides.length === 0) return;
    slides.forEach(s => s.classList.remove("active"));
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;
    slides[slideIndex - 1].classList.add("active");
}
setInterval(moveSlider, 4000);

// 3. User & Order Flow
function handleOrder(itemName) {
    const user = localStorage.getItem("isLoggedIn");
    if (!user) {
        alert("Please login first to place your order! 😊");
        window.location.href = "login.html";
    } else {
        localStorage.setItem("selectedItem", itemName);
        window.location.href = "order.html";
    }
}

// 4. Login Action
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        localStorage.setItem("isLoggedIn", "true");
        alert("Welcome Back!");
        window.location.href = "index.html";
    });
}

// 5. Order Action
function placeOrder(e) {
    e.preventDefault();
    alert("🎉 Order Placed! We will contact you soon.");
    window.location.href = "index.html";
}