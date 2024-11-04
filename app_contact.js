    document.addEventListener('DOMContentLoaded', function () {

        const messages = [
            "Welcome to A&A Clothing Store!",
            "Explore the latest trends in fashion.",
            "Get 20% off on your first purchase!",
            "Sign up for exclusive offers.",
            "Need help? Contact our support team."
        ];

        let currentMessageIndex = 0;

        function updateMessage() {
            const messageElement = document.getElementById('dynamic-message-top');

            for (let i = 0; i < messages.length; i++) {
                if (i === currentMessageIndex) {
                    messageElement.textContent = messages[i];
                }
            }

            currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        }

        setInterval(updateMessage, 2000);

        const updateMessageButton = document.getElementById('updateMessageBtn');
        updateMessageButton.addEventListener('click', function () {
            document.getElementById('dynamic-message').textContent = 'A support agent will contact you shortly. Thank you for reaching out.';
        });

        
        const toggleThemeButton = document.getElementById('toggleThemeBtn');
        toggleThemeButton.addEventListener('click', function () {
            document.body.classList.toggle('night-mode');
            toggleThemeButton.textContent = document.body.classList.contains('night-mode') ? 'Switch to Day Mode' : 'Switch to Night Mode';
        });


        const showTimeButton = document.getElementById('showTimeBtn');
        const timeDisplay = document.getElementById('current-time');
        showTimeButton.addEventListener('click', function () {
            const currentTime = new Date().toLocaleTimeString();
            timeDisplay.textContent = currentTime;
        });

        
        const playSoundButton = document.getElementById('playSoundBtn');
        const audio = new Audio('sound_abylay/simple-notification-152054.mp3');
        playSoundButton.addEventListener('click', function () {
            audio.play();
        });

        
        const animatedButton = document.getElementById('animateBtn');
        const specialOffersContainer = document.createElement('div');
        specialOffersContainer.id = 'special-offers-container';

        animatedButton.addEventListener('click', function () {
            animatedButton.style.transform = 'scale(1.2)';
            setTimeout(() => {
                animatedButton.style.transform = 'scale(1)';
            }, 300);

            const productHTML = `
                <div class="special-offer mt-4">
                    <img src="images_abylay/yeezy.jpg" alt="Special Product" class="img-fluid" style="max-width: 200px; margin: auto; display: block;">
                    <h4 class="text-center mt-2">Exclusive Shoes - 20% Off!</h4>
                    <p class="text-center">Get this limited-edition shoes, only available in our store. Don't miss the chance to buy this item with a special discount!</p>
                </div>
            `;

            if (!document.querySelector('.special-offer')) {
                specialOffersContainer.innerHTML = productHTML;
                animatedButton.parentElement.appendChild(specialOffersContainer);
            }
        });

        
        const contactForm = document.getElementById('contactForm');
        const errorMessage = document.getElementById('error-messages');

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            
            errorMessage.textContent = '';

            
            const formFields = [
                { id: 'name', value: document.getElementById('name').value.trim() },
                { id: 'email', value: document.getElementById('email').value.trim(), validate: validateEmail },
                { id: 'interest', value: document.getElementById('interest').value.trim() },
                { id: 'message', value: document.getElementById('message').value.trim() }
            ];

            // using the higher-order function 
            const invalidFields = formFields.map(field => {
                if (!field.value || (field.id === 'email' && !field.validate(field.value))) {
                    return field.id;
                }
                return null;
            }).filter(Boolean);  

            if (invalidFields.length > 0) {
                errorMessage.textContent = `Please fill out the following fields correctly: ${invalidFields.join(', ')}`;
            } else {
                alert('Form was sent successfully!');
                contactForm.reset();  
            }
        });

        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
    });

    document.addEventListener('keydown', function (event) {
        const menuItems = document.querySelectorAll('#main-nav .nav-link');
        let currentIndex = Array.from(menuItems).findIndex(item => document.activeElement === item);
    
        if (event.key === 'ArrowDown') {
            currentIndex = (currentIndex + 1) % menuItems.length;
            menuItems[currentIndex].focus();
            event.preventDefault(); 
        } else if (event.key === 'ArrowUp') {
            currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
            menuItems[currentIndex].focus();
            event.preventDefault(); 
        }
    });
    
