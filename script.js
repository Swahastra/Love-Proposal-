document.getElementById('yes-button').onclick = () => {
    triggerYesCondition();
};

document.getElementById('no-button').onclick = () => {
    triggerNoCondition();
};

// Initial setup
document.getElementById('dudu-gif').style.display = 'none';
document.getElementById('crying-gif').style.display = 'none';
document.getElementById('proposal-text').style.display = 'none';
document.getElementById('yes-gif').style.display = 'none';
document.getElementById('rejection-message').style.display = 'none';
document.getElementById('thank-you-message').style.display = 'none';

// Ensure Bubu GIF is visible inside the container initially
document.getElementById('bubu-gif').style.display = 'block';

// Show Dudu GIF, proposal message, and buttons after 2 seconds
setTimeout(() => {
    document.getElementById('dudu-gif').style.display = 'block';
    document.getElementById('proposal-text').style.display = 'block';

    // Play proposal music when the proposal message appears
    document.getElementById('proposal-music').play();
}, 2000);

function triggerYesCondition() {
    // Stop other music
    stopAllMusic();

    // Replace bubu GIF with yes GIF
    document.getElementById('bubu-gif').style.display = 'none';
    document.getElementById('yes-gif').style.display = 'block';

    // Hide Crying GIF
    document.getElementById('crying-gif').style.display = 'none';

    // Hide Dudu GIF and Rejection Message
    document.getElementById('dudu-gif').style.display = 'none';
    document.getElementById('rejection-message').style.display = 'none';

    // Show Thank You message
    document.getElementById('thank-you-message').style.display = 'block';

    // Play thank-you music
    document.getElementById('thankyou-music').play();

    // Animate heart emojis inside the blur container
    animateEmojis('💕');

    // Hide Proposal Text and Yes/No Buttons
    document.getElementById('proposal-text').style.display = 'none';
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
}

function triggerNoCondition() {
    // Stop other music
    stopAllMusic();

    // Keep Bubu GIF in place
    document.getElementById('bubu-gif').style.display = 'block';

    // Show Crying GIF and keep it outside the container
    document.getElementById('crying-gif').style.display = 'block';
    document.getElementById('dudu-gif').style.display = 'none';

    // Display Rejection Message
    document.getElementById('rejection-message').style.display = 'block';

    // Play rejection music
    document.getElementById('rejection-music').play();

    // Animate sad emojis inside the blur container
    animateEmojis('😭');

    // Show Yes/No Buttons again
    document.getElementById('yes-button').style.display = 'block';
    document.getElementById('no-button').style.display = 'block';
}

function animateEmojis(emoji) {
    let container = document.getElementById('emoji-container');
    container.innerHTML = '';  // Clear any previous emojis

    for (let i = 0; i < 20; i++) { // Adjust number of emojis as needed
        let emojiElement = document.createElement('span');
        emojiElement.textContent = emoji;
        container.appendChild(emojiElement);

        setTimeout(() => {
            emojiElement.style.opacity = '1';  // Animate the emoji to become visible
        }, i * 100); // Stagger the animations
    }
}

function stopAllMusic() {
    // Stop all the audio
    document.getElementById('proposal-music').pause();
    document.getElementById('proposal-music').currentTime = 0; // Reset time
    document.getElementById('rejection-music').pause();
    document.getElementById('rejection-music').currentTime = 0; // Reset time
    document.getElementById('thankyou-music').pause();
    document.getElementById('thankyou-music').currentTime = 0; // Reset time
}
