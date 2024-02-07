// Select the target node (usually the body or a broader container)
const targetNode = document.body;
var firstClick = 0;

// Create a MutationObserver instance
const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
    	if(firstClick==0){
    		console.log('Chat Button Clicked!');
    		firstClick++;	
    	}
        if (mutation.addedNodes.length) {
            const inputElement = document.querySelector('.composer__input__d6OQi');
            if (inputElement) {
                inputElement.setAttribute('data-placeholder', 'look I changed');
            }
        }
    });

});

// Configuration of the observer
const config = { childList: true, subtree: true };

// Start observing
observer.observe(targetNode, config);

