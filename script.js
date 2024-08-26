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
    playMusic('proposal-music'); // Play proposal music when proposal text appears
}, 2000);

function triggerYesCondition() {
    stopAllMusic(); // Stop all music

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
    playMusic('thankyou-music');

    // Animate heart emojis inside the blur container
    animateEmojis('💕');

    // Hide Proposal Text and Yes/No Buttons
    document.getElementById('proposal-text').style.display = 'none';
    document.getElementById('yes-button').style.display = 'none';
    document.getElementById('no-button').style.display = 'none';
}

function triggerNoCondition() {
    stopAllMusic(); // Stop all music

    // Keep Bubu GIF in place
    document.getElementById('bubu-gif').style.display = 'block';

    // Show Crying GIF and keep it outside the container
    document.getElementById('crying-gif').style.display = 'block';
    document.getElementById('dudu-gif').style.display = 'none';

    // Display Rejection Message
    document.getElementById('rejection-message').style.display = 'block';

    // Play rejection music
    playMusic('rejection-music');

    // Animate sad emojis inside the blur container
    animateEmojis('😭');

    // Show Yes/No Buttons again
    document.getElementById('yes-button').style.display = 'block';
    document.getElementById('no-button').style.display = 'block';
}

// Function to play music by ID
function playMusic(audioId) {
    stopAllMusic(); // Ensure all other music is stopped
    let audio = document.getElementById(audioId);
    if (audio) {
        audio.play();
    }
}

// Function to stop all audio
function stopAllMusic() {
    let audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}

// Function to animate emojis (reusable for hearts and sad faces)
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
