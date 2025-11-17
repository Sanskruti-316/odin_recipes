// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get references to HTML elements
    const button = document.getElementById('clickMe');
    const message = document.getElementById('message');
    
    // Counter for button clicks
    let clickCount = 0;
    
    // Array of encouraging messages
    const messages = [
        "Great job! Keep learning! 🎉",
        "You're doing awesome! 🌟",
        "Web development is fun! 💻",
        "Keep up the great work! 🚀",
        "You're on your way to becoming a developer! 🎯"
    ];
    
    // Add click event listener to the button
    button.addEventListener('click', function() {
        clickCount++;
        
        // Get a random message from the array
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Update the message element
        message.textContent = `${randomMessage} (Clicked ${clickCount} time${clickCount !== 1 ? 's' : ''})`;
        
        // Add a simple animation effect
        message.style.animation = 'none';
        setTimeout(() => {
            message.style.animation = 'fadeIn 0.5s';
        }, 10);
    });
    
    // Log to console for learning purposes
    console.log('Welcome to your first interactive web page!');
    console.log('Open the browser console (F12) to see this message.');
});

// CSS animation keyframes (will be applied dynamically)
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(-10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
