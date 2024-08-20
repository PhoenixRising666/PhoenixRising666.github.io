(function() {
    const nativeWebSocket = window.WebSocket;
    const sockets = [];

    window.WebSocket = function(...args) {
        const socket = new nativeWebSocket(...args);
        sockets.push(socket);

        socket.addEventListener('message', function(event) {
            const incomingMessage = JSON.parse(event.data);

            if (incomingMessage.fields && incomingMessage.fields.args && incomingMessage.fields.args.length > 0) {
                incomingMessage.fields.args.forEach(arg => {
                    const messageText = arg.msg;
                    const germanTranslation = arg.translations.de;

                    console.log('Received message:', messageText);
                    console.log('German translation:', germanTranslation);

                    // Use querySelectorAll to find elements containing the text
                    const messageElements = document.querySelectorAll('div[class*="message-text"] > div');

                    messageElements.forEach(element => {
                        if (element.textContent.trim() === messageText.trim()) {
                            console.log(`Text matched: ${element.textContent}. Replacing with: ${germanTranslation}`);
                            element.textContent = germanTranslation;
                        }
                    });
                });
            }
        });

        return socket;
    };
})();
