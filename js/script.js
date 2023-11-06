
// Function to animate skill bars
function animateSkills() {
    var skills = document.querySelectorAll('.skill-per');
    skills.forEach(skill => {
        skill.style.width = skill.getAttribute('per');
    });
}

// Run the animation for the skill bars
window.onload = function() {
    animateSkills();
};

// Simple form validation
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the actual form submission
    
    var name = document.querySelector('#contact-form input[type=text]').value.trim();
    var email = document.querySelector('#contact-form input[type=email]').value.trim();
    var message = document.querySelector('#contact-form textarea').value.trim();
    
    if(name && email && message) {
        // Implement the logic to send the form data to your server or email
        console.log('Name:', name, 'Email:', email, 'Message:', message);
        alert('Thank you for your message!');
    } else {
        alert('Please fill out all fields.');
    }
});
