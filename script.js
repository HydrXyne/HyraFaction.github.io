document.addEventListener("DOMContentLoaded", function() {
    // Simulate loading delay
    setTimeout(function() {
        // Remove loading-blur class from body to remove blur effect
        document.body.classList.remove('loading-blur');
        // Hide loading screen
        document.querySelector('.loading-screen').style.display = 'none';
        // Show content with animation
        document.querySelector('.content').classList.remove('hidden');
        document.querySelector('.content').classList.add('visible');
    }, 3000);
});

