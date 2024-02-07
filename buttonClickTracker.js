document.addEventListener('click', function(event) {
    // Check if the clicked element is the chat button or a descendant of it
    if (event.target.closest('.button__rX4Lp')) {
        console.log('Chat button clicked!');
    }
});