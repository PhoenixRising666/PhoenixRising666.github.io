document.addEventListener('click', function(event) {
    // Check if the clicked element is the chat button or a descendant of it
    if (event.target.closest('.button__rX4Lp')) {
        // JavaScript to change the color
		document.documentElement.style.setProperty('--color', '#0000FF'); // Replace '#0000FF' with your desired color
    }
});