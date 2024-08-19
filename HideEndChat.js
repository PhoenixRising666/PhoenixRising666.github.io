document.addEventListener("DOMContentLoaded", function() {
    function hideOptionsButton() {
        // Use a selector that matches the beginning of the class name
        const optionsButton = document.querySelector('button[class^="footer__options__"]');

        // If the button is found, hide it
        if (optionsButton) {
            optionsButton.style.display = 'none';
        } else {
            // If the button is not found, try again after a short delay
            setTimeout(hideOptionsButton, 500); // Retry every 500 milliseconds
        }
    }


    hideOptionsButton();
});
