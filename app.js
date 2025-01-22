// Function to generate a random delay between min and max seconds
function generateRandomDelay(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Handle Player State Changes
function onPlayerStateChange(event) {
    const videoId = event.target.getVideoData().video_id;

    if (event.data === YT.PlayerState.ENDED) {
        // Remove the video from the DOM when it ends
        const videoArea = document.getElementById(`video-${videoId}`);
        if (videoArea) {
            videoArea.remove();
        }

        // Remove the player instance from the players object
        delete players[videoId];

        // Generate a random delay between 3 and 25 seconds
        const randomDelay = generateRandomDelay(3, 25);

        // Reopen the video after the random delay
        setTimeout(() => {
            addVideoToDOM(videoId); // Re-add the video to the DOM
        }, randomDelay * 1000); // Convert seconds to milliseconds
    }
}
