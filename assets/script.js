const textElement = document.getElementById('para');
const messages = ["Where there is security", "We prioritize customers' privacy", "Don't hesitate to create an account now", "We will be glad to know you"]; // Array containing the different messages
let messageIndex = 0; // Current index of the message being displayed

function animateWriting(message) {
    let index = 0;

    function writeNextCharacter() {
        if (index <= message.length) {
            textElement.textContent = message.substring(0, index);
            index++;
            setTimeout(writeNextCharacter, 150); // Adjust the speed of animation (milliseconds)
        } else {
            // Animation for one message completes, move to the next message
            messageIndex++;
            if (messageIndex >= messages.length) {
                // Reset the index to start from the beginning
                messageIndex = 0;
            }
            // Call animateWriting() with the next message
            animateWriting(messages[messageIndex]);
        }
    }

    // Start the writing animation for the current message
    writeNextCharacter();
}

// Start the animation cycle with the first message
animateWriting(messages[messageIndex]);
