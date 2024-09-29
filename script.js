
function learnMore() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}
// Open and Close Modal Script
var modal = document.getElementById("login.html");
var createAccountModal = document.getElementById("createAccountModal");
var loginBtn = document.getElementById("loginBtn");
var createAccountBtn = document.getElementById("createAccountBtn");
var closeLoginModal = document.getElementsByClassName("close")[0];
var closeCreateAccountModal = document.getElementById("closeCreateAccount");
var toCreateAccount = document.getElementById("toCreateAccount");

// Open login modal on login button click
loginBtn.onclick = function() {
    modal.style.display = "block";
}

// Open create account modal on create account button click
createAccountBtn.onclick = function() {
    createAccountModal.style.display = "block";
}

// Close modal on close button click
closeLoginModal.onclick = function() {
    modal.style.display = "none";
}

// Close create account modal on close button click
closeCreateAccountModal.onclick = function() {
    createAccountModal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    } else if (event.target == createAccountModal) {
        createAccountModal.style.display = "none";
    }
}

// Function to handle subscription
function subscribe(service) {
    alert(`You have subscribed to the monthly plan for: ${service}`);
}

// Function to learn more (can be customized)
function learnMore() {
    alert("Learn more about our services!");
}

// Handle the login form submission
document.getElementById("loginForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Logged in successfully!");
    modal.style.display = "none"; // Close modal on success
}

// Handle the create account form submission
document.getElementById("createAccountForm").onsubmit = function(e) {
    e.preventDefault();
    alert("Account created successfully!");
    createAccountModal.style.display = "none"; // Close modal on success
}
