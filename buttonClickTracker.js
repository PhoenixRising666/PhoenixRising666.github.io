document.addEventListener('click', function(event) {
    // Check if the clicked element is the chat button
    if (event.target.closest('#chatButton')) {
        console.log('Chat button clicked!');
    }
});