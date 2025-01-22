// Variables
let videoCounter = {}; // Tracks how many times each video URL has been opened
let totalTimeSpent = 0; // Total time spent watching videos (in hours)
let dailyTimeSpent = 0; // Daily time spent watching videos (in hours)
let players = {}; // Stores YouTube player instances

// Add Video Function
function addVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);
    const numOfVideos = parseInt(document.getElementById('number-of-url').value, 10) || 1; // Default to 1 if no value is entered

    if (videoId && numOfVideos > 0) {
        for (let i = 0; i < numOfVideos; i++) {
            addVideoToDOM(videoId, videoUrl); // Add video iframe directly to the DOM
        }
        trackVideoCounter(videoUrl, numOfVideos); // Update the counter for the video
        updateCounterTable(); // Update the counter table
        updateTimeSpent(numOfVideos); // Update time spent
        document.getElementById('videoUrl').value = ''; // Clear video URL input
        document.getElementById('number-of-url').value = ''; // Clear number input field
    } else {
        alert('Please enter a valid YouTube URL and a positive number!');
    }
}

// Extract Video ID Function
function extractVideoId(url) {
    const regex = /(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/))([a-zA-Z0-9_-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

// Add Video to DOM Function
function addVideoToDOM(videoId) {
    const videoContainer = document.getElementById('videoContainer');

    const videoArea = document.createElement('div');
    videoArea.classList.add('video-area');
    videoArea.id = `video-${videoId}`; // Unique ID for each video container

    const videoFrame = document.createElement('iframe');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`;
    videoFrame.width = '300';
    videoFrame.height = '200';
    videoFrame.allowFullscreen = true;
    videoFrame.dataset.videoId = videoId;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-video-btn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => videoContainer.removeChild(videoArea));

    videoArea.appendChild(videoFrame);
    videoArea.appendChild(removeButton);
    videoContainer.appendChild(videoArea);

    // Initialize the YouTube player
    initializePlayer(videoId, videoFrame);
}

// Initialize YouTube Player
function initializePlayer(videoId, videoFrame) {
    players[videoId] = new YT.Player(videoFrame, {
        events: {
            'onStateChange': onPlayerStateChange // Listen for state changes
        }
    });
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
        const randomDelay = Math.floor(Math.random() * (25 - 3 + 1)) + 3;

        // Reopen the video after the random delay
        setTimeout(() => {
            addVideoToDOM(videoId); // Re-add the video to the DOM
        }, randomDelay * 1000); // Convert seconds to milliseconds
    }
}

// Track Video Counter Function
function trackVideoCounter(url, numOfVideos) {
    videoCounter[url] = (videoCounter[url] || 0) + numOfVideos;
}

// Update Counter Table Function
function updateCounterTable() {
    const counterTableBody = document.querySelector('#counterTable tbody');
    counterTableBody.innerHTML = ''; // Clear existing rows

    for (const [url, count] of Object.entries(videoCounter)) {
        const row = `<tr><td>${url}</td><td>${count}</td></tr>`;
        counterTableBody.innerHTML += row;
    }
}

// Update Time Spent Function
function updateTimeSpent(numOfVideos) {
    const timePerVideo = 0.5; // Assume each video takes 30 minutes
    dailyTimeSpent += timePerVideo * numOfVideos;
    totalTimeSpent += timePerVideo * numOfVideos;

    document.getElementById('dailyTime').textContent = `Time spent today: ${dailyTimeSpent.toFixed(1)} hours`;
    document.getElementById('weeklyTime').textContent = `Time spent this week: ${totalTimeSpent.toFixed(1)} hours`;
}

// Override Tab Inactivity
function keepTabActive() {
    // Prevent tab from becoming inactive
    Object.defineProperty(document, 'hidden', { value: false, writable: false });
    Object.defineProperty(document, 'visibilityState', { value: 'visible', writable: false });

    // Simulate visibilitychange event
    const visibilityChangeEvent = new Event('visibilitychange');
    setInterval(() => {
        document.dispatchEvent(visibilityChangeEvent);
    }, 1000);
}

// Load YouTube IFrame API
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Initialize App
function initializeApp() {
    loadYouTubeAPI();
    keepTabActive(); // Ensure the tab remains active
}

// Event Listeners
document.getElementById('addVideoBtn').addEventListener('click', addVideo);

// Start the app
initializeApp();
