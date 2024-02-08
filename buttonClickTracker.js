document.addEventListener('click', function(event) {
    // Check if the clicked element has the data-qa-id "chat-button" or is inside an element with this data-qa-id
    if (event.target.closest('[data-qa-id="chat-button"]')) {
        console.log('Chat button clicked!');
    }
});