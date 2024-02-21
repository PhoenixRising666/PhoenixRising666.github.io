document.addEventListener('click', function(event) {
    var clickCount=0;
    // Check if the clicked element has the data-qa-id "chat-button" or is inside an element with this data-qa-id
    if (event.target.closest('[data-qa-id="chat-button"]')) {
        if(clickCount==0){
            console.log('Chat button clicked!');
            clickCount++;
        }
    }
});