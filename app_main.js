document.addEventListener("DOMContentLoaded", function () {
    
    const loginForm = document.getElementById("login-form");
    const welcomeSection = document.getElementById("welcome-section");
    const loginBtn = document.getElementById("login-btn");
    const logoutBtn = document.getElementById("logout-btn");
    const displayUsername = document.getElementById("display-username");

    
    const storedUsername = localStorage.getItem("username");

    
    if (storedUsername) {
        loginForm.style.display = "none";
        welcomeSection.style.display = "block";
        displayUsername.textContent = storedUsername;
    }

    
    loginBtn.addEventListener("click", function () {
        const usernameInput = document.getElementById("username").value;
        if (usernameInput) {
            localStorage.setItem("username", usernameInput);
            displayUsername.textContent = usernameInput;
            loginForm.style.display = "none";
            welcomeSection.style.display = "block";
        } else {
            alert("Please enter a valid username.");
        }
    });

    
    logoutBtn.addEventListener("click", function () {
        localStorage.removeItem("username");
        loginForm.style.display = "block";
        welcomeSection.style.display = "none";
    });

    
    const toggleThemeBtn = document.getElementById("toggle-theme-btn");
    const currentTheme = localStorage.getItem("theme") || "light";

    
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
        toggleThemeBtn.textContent = "Switch to Light Mode";
    } else {
        document.body.classList.add("light");
        toggleThemeBtn.textContent = "Switch to Dark Mode";
    }

    
    toggleThemeBtn.addEventListener("click", function () {
        if (document.body.classList.contains("light")) {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
            toggleThemeBtn.textContent = "Switch to Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
            toggleThemeBtn.textContent = "Switch to Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    
    currentStep = 0;
    const steps = document.querySelectorAll(".step");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    function showStep(step) {
        steps.forEach((stepDiv, index) => {
            stepDiv.style.display = index === step ? "block" : "none";
        });
        prevBtn.style.display = step === 0 ? "none" : "inline-block";
        nextBtn.innerText = step === steps.length - 1 ? "Submit" : "Next";
    }

    showStep(currentStep);

    const nameInput = document.getElementById("name-input");
    const addressInput = document.getElementById("address-input");
    const paymentInput = document.getElementById("payment-input");

    let formData = {
        name: "",
        address: "",
        payment: ""
    };

    nextBtn.addEventListener("click", function () {
        formData.name = nameInput.value;
        formData.address = addressInput.value;
        formData.payment = paymentInput.value;

        if (currentStep < steps.length - 1) {
            currentStep++;
            showStep(currentStep);
        } else {
            alert("Form submitted successfully!");
        }

        if (currentStep === 1) {
            nameInput.value = formData.name;
        } else if (currentStep === 2) {
            addressInput.value = formData.address;
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentStep > 0) {
            currentStep--;
            showStep(currentStep);
        }

        if (currentStep === 1) {
            nameInput.value = formData.name;
        } else if (currentStep === 0) {
            nameInput.value = formData.name;
        }
    });

    const soundBtn = document.getElementById("soundBtn");
    let audio = new Audio("sound_abylay/information-corporate-advertising-music-252179.mp3");
    let isPlaying = false;

    soundBtn.addEventListener("click", function () {
        if (isPlaying) {
            audio.pause();
            soundBtn.innerText = "Play Sound";
        } else {
            audio.play();
            soundBtn.innerText = "Pause Sound";
        }
        isPlaying = !isPlaying;
    });

    audio.addEventListener("ended", function () {
        isPlaying = false;
        soundBtn.innerText = "Play Sound";
    });

    const dateTimeDisplay = document.getElementById("date-time-display");
    function updateDateTime() {
        const now = new Date();
        dateTimeDisplay.textContent = now.toLocaleString();
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    const stars = document.querySelectorAll('.rating-star');
    let selectedRating = localStorage.getItem('selectedRating') || 0;

    if (selectedRating) {
        highlightStars(selectedRating);
    }

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedRating = index + 1; 
            highlightStars(selectedRating);
            localStorage.setItem('selectedRating', selectedRating);
        });

        star.addEventListener('mouseover', () => {
            highlightStars(index + 1);
        });

        star.addEventListener('mouseout', () => {
            highlightStars(selectedRating);
        });
    });

    function highlightStars(rating) {
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    const animateBtn = document.getElementById("animateBtn");

    animateBtn.addEventListener("click", function () {
        animateBtn.classList.add("animate");
        
        setTimeout(function () {
            animateBtn.classList.remove("animate");
        }, 1000);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
                transform: translateY(0);
            }
            40% {
                transform: translateY(-30px);
            }
            60% {
                transform: translateY(-15px);
            }
        }
        .animate {
            animation: bounce 1s ease;
        }
    `;
    document.head.appendChild(style);

    const colors = ["#f0f8ff", "#ffcccb", "#c1e1c1", "#add8e6", "#ffe4e1", "#fafad2", "#d3d3d3"];
    let colorIndex = 0;  

    const changeBgBtn = document.getElementById("change-bg-btn");

    changeBgBtn.addEventListener("click", function () {
        document.body.style.backgroundColor = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;  
    });

    const motivationalMessages = [
        "We love our Customers!",
        "Sales this whole week!",
        "We are waiting for You!",
        "Choose Your favorite clothes in our store!",
        "A&A Store is the best!"
    ];

    let currentMotivationalIndex = 0;
    const motivationalDisplay = document.getElementById('motivational-display');

    function updateMotivationalMessage() {
        motivationalDisplay.textContent = motivationalMessages[currentMotivationalIndex];
        currentMotivationalIndex = (currentMotivationalIndex + 1) % motivationalMessages.length;
    }

    setInterval(updateMotivationalMessage, 2000);
});

document.getElementById("shop-now-btn").addEventListener("click", function() {
    window.location.href = "shop.html";
});
document.getElementById("learn-more-btn").addEventListener("click", function() {
    window.location.href = "about.html";
});
