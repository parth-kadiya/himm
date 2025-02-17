function showForm(formType) {
    document.getElementById("login-form").classList.remove("active");
    document.getElementById("register-form").classList.remove("active");

    if (formType === "login") {
        document.getElementById("login-form").classList.add("active");
    } else {
        document.getElementById("register-form").classList.add("active");
    }

    document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

// **Force Login on Any Input**
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent actual form submission
    window.location.href = "2.html"; // Redirect to next page
});

// **Force Register on Any Input**
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent actual form submission
    window.location.href = "2.html"; // Redirect to next page
});
