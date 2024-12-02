// // Variables
// let videoCounter = {};
// let totalTimeSpent = 0; // Total hours
// let dailyTimeSpent = 0; // Daily hours

// // Add Video Function
// function addVideo() {
//     const videoUrl = document.getElementById('videoUrl').value;
//     const videoId = extractVideoId(videoUrl);
//     const numOfVideos = parseInt(document.getElementById('number-of-url').value, 10); // Get the number of videos

//     if (videoId && numOfVideos > 0) {
//         for (let i = 0; i < numOfVideos; i++) {
//             addVideoToDOM(videoId, videoUrl);
//         }
//         trackVideoCounter(videoUrl, numOfVideos);
//         updateCounterTable();
//         updateTimeSpent(numOfVideos);
//         document.getElementById('videoUrl').value = ''; // Clear video URL input
//         document.getElementById('number-of-url').value = ''; // Clear number input
//     } else {
//         alert('Invalid YouTube URL or number of times!');
//     }
// }

// // Extract Video ID
// function extractVideoId(url) {
//     const regex = /(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/))([a-zA-Z0-9_-]{11})/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
// }

// // Add Video to DOM
// function addVideoToDOM(videoId, url) {
//     const videoContainer = document.getElementById('videoContainer');

//     const videoArea = document.createElement('div');
//     videoArea.classList.add('video-area');

//     const videoFrame = document.createElement('iframe');
//     videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//     videoFrame.width = '300';
//     videoFrame.height = '200';
//     videoFrame.allowFullscreen = true;

//     const description = document.createElement('div');
//     description.classList.add('description');
//     description.innerHTML = `<p>${url}</p>`;

//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove-video-btn');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => videoContainer.removeChild(videoArea));

//     videoArea.appendChild(videoFrame);
//     videoArea.appendChild(description);
//     videoArea.appendChild(removeButton);
//     videoContainer.appendChild(videoArea);
// }

// // Track Video Counter
// function trackVideoCounter(url, numOfVideos) {
//     videoCounter[url] = (videoCounter[url] || 0) + numOfVideos;
// }

// // Update Counter Table
// function updateCounterTable() {
//     const counterTable = document.querySelector('#counterTable tbody');
//     counterTable.innerHTML = '';

//     for (const [url, count] of Object.entries(videoCounter)) {
//         const row = `<tr><td>${url}</td><td>${count}</td></tr>`;
//         counterTable.innerHTML += row;
//     }
// }

// // Update Time Spent
// function updateTimeSpent(numOfVideos) {
//     const timePerVideo = 0.5; // Assume each video takes 30 minutes
//     dailyTimeSpent += timePerVideo * numOfVideos;
//     totalTimeSpent += timePerVideo * numOfVideos;

//     document.getElementById('dailyTime').textContent = `Time spent today: ${dailyTimeSpent.toFixed(1)} hours`;
//     document.getElementById('weeklyTime').textContent = `Time spent this week: ${totalTimeSpent.toFixed(1)} hours`;
// }

// // Event Listener for Add Video
// document.getElementById('addVideoBtn').addEventListener('click', addVideo);


// // Open All Videos Function
// function openAllVideos() {
//     const videoContainer = document.getElementById('videoContainer');
//     videoContainer.innerHTML = ''; // Clear existing videos in the container

//     // Iterate through all video URLs in the videoCounter object
//     for (const url in videoCounter) {
//         const videoId = extractVideoId(url); // Extract the video ID from the URL
//         if (videoId) {
//             addVideoToDOM(videoId, url); // Add each video to the container
//         }
//     }
// }

// // Event Listener for the "Open All" Button
// document.getElementById('open-all').addEventListener('click', openAllVideos);

// // Open All Videos Function
// function openAllVideos() {
//     const videoContainer = document.getElementById('videoContainer');

//     // Clear any duplicates without removing existing videos
//     const currentVideos = Array.from(videoContainer.querySelectorAll('.video-area'));
//     const currentUrls = currentVideos.map(video => video.querySelector('.description p').textContent);

//     for (const url in videoCounter) {
//         const videoId = extractVideoId(url);

//         // Add only videos that are not already present in the container
//         if (videoId && !currentUrls.includes(url)) {
//             addVideoToDOM(videoId, url);
//         }
//     }
// }

// // Extract Video ID Function (Unchanged)
// function extractVideoId(url) {
//     const regex = /(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/))([a-zA-Z0-9_-]{11})/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
// }

// // Add Video to DOM Function (Unchanged)
// function addVideoToDOM(videoId, url) {
//     const videoContainer = document.getElementById('videoContainer');

//     const videoArea = document.createElement('div');
//     videoArea.classList.add('video-area');

//     const videoFrame = document.createElement('iframe');
//     videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//     videoFrame.width = '300';
//     videoFrame.height = '200';
//     videoFrame.allowFullscreen = true;

//     const description = document.createElement('div');
//     description.classList.add('description');
//     description.innerHTML = `<p>${url}</p>`;

//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove-video-btn');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => videoContainer.removeChild(videoArea));

//     videoArea.appendChild(videoFrame);
//     videoArea.appendChild(description);
//     videoArea.appendChild(removeButton);
//     videoContainer.appendChild(videoArea);
// }

// // Event Listener for the "Open All" Button
// document.getElementById('open-all').addEventListener('click', openAllVideos);




// // Variables
// let videoCounter = {}; // Tracks how many times each video URL has been opened
// let totalTimeSpent = 0; // Total time spent watching videos (in hours)
// let dailyTimeSpent = 0; // Daily time spent watching videos (in hours)

// // Add Video Function
// function addVideo() {
//     const videoUrl = document.getElementById('videoUrl').value;
//     const videoId = extractVideoId(videoUrl);
//     const numOfVideos = parseInt(document.getElementById('number-of-url').value, 10); // Get the number of videos

//     if (videoId && numOfVideos > 0) {
//         for (let i = 0; i < numOfVideos; i++) {
//             addVideoToDOM(videoId, videoUrl);
//         }
//         trackVideoCounter(videoUrl, numOfVideos);
//         updateCounterTable();
//         updateTimeSpent(numOfVideos);
//         document.getElementById('videoUrl').value = ''; // Clear video URL input
//         document.getElementById('number-of-url').value = ''; // Clear number input
//     } else {
//         alert('Invalid YouTube URL or number of times!');
//     }
// }

// // Extract Video ID Function
// function extractVideoId(url) {
//     const regex = /(?:https?:\/\/(?:www\.)?(?:youtube\.com\/(?:[^\/]+\/[^\/]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/))([a-zA-Z0-9_-]{11})/;
//     const match = url.match(regex);
//     return match ? match[1] : null;
// }

// // Add Video to DOM Function (No URL Display)
// function addVideoToDOM(videoId, url) {
//     const videoContainer = document.getElementById('videoContainer');

//     const videoArea = document.createElement('div');
//     videoArea.classList.add('video-area');

//     const videoFrame = document.createElement('iframe');
//     videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
//     videoFrame.width = '300';
//     videoFrame.height = '200';
//     videoFrame.allowFullscreen = true;

//     const removeButton = document.createElement('button');
//     removeButton.classList.add('remove-video-btn');
//     removeButton.textContent = 'Remove';
//     removeButton.addEventListener('click', () => videoContainer.removeChild(videoArea));

//     videoArea.appendChild(videoFrame);
//     videoArea.appendChild(removeButton);
//     videoContainer.appendChild(videoArea);
// }

// // Track Video Counter Function
// function trackVideoCounter(url, numOfVideos) {
//     videoCounter[url] = (videoCounter[url] || 0) + numOfVideos;
// }

// // Update Counter Table Function
// function updateCounterTable() {
//     const counterTableBody = document.querySelector('#counterTable tbody');
//     counterTableBody.innerHTML = ''; // Clear existing rows

//     for (const [url, count] of Object.entries(videoCounter)) {
//         const row = `<tr><td>${url}</td><td>${count}</td></tr>`;
//         counterTableBody.innerHTML += row;
//     }
// }

// // Update Time Spent Function
// function updateTimeSpent(numOfVideos) {
//     const timePerVideo = 0.5; // Assume each video takes 30 minutes
//     dailyTimeSpent += timePerVideo * numOfVideos;
//     totalTimeSpent += timePerVideo * numOfVideos;

//     document.getElementById('dailyTime').textContent = `Time spent today: ${dailyTimeSpent.toFixed(1)} hours`;
//     document.getElementById('weeklyTime').textContent = `Time spent this week: ${totalTimeSpent.toFixed(1)} hours`;
// }

// // Event Listeners
// document.getElementById('addVideoBtn').addEventListener('click', addVideo); // Add video button

// // Open All Videos Function
// function openAllVideos() {
//     const videoContainer = document.getElementById('videoContainer');
//     videoContainer.innerHTML = ''; // Clear existing videos in the container

//     // Iterate through all video URLs in the videoCounter object
//     for (const url in videoCounter) {
//         const videoId = extractVideoId(url); // Extract the video ID from the URL
//         if (videoId) {
//             addVideoToDOM(videoId, url); // Add each video to the container
//         }
//     }
// }

// // Event Listener for the "Open All" Button
// document.getElementById('open-all').addEventListener('click', openAllVideos);




// Variables
let videoCounter = {}; // Tracks how many times each video URL has been opened
let totalTimeSpent = 0; // Total time spent watching videos (in hours)
let dailyTimeSpent = 0; // Daily time spent watching videos (in hours)

// Add Video Function
function addVideo() {
    const videoUrl = document.getElementById('videoUrl').value;
    const videoId = extractVideoId(videoUrl);
    const numOfVideos = parseInt(document.getElementById('number-of-url').value, 10) || 1; // Default to 1 if no value is entered

    if (videoId && numOfVideos > 0) {
        for (let i = 0; i < numOfVideos; i++) {
            addVideoToDOM(videoId, videoUrl); // Add the video to the DOM
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

// Add Video to DOM Function (No URL Display)
function addVideoToDOM(videoId, url) {
    const videoContainer = document.getElementById('videoContainer');

    const videoArea = document.createElement('div');
    videoArea.classList.add('video-area');

    const videoFrame = document.createElement('iframe');
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    videoFrame.width = '300';
    videoFrame.height = '200';
    videoFrame.allowFullscreen = true;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-video-btn');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => videoContainer.removeChild(videoArea));

    videoArea.appendChild(videoFrame);
    videoArea.appendChild(removeButton);
    videoContainer.appendChild(videoArea);
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

// Event Listeners
document.getElementById('addVideoBtn').addEventListener('click', addVideo); // Add video button
