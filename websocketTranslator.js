(function waitForWebSocket() {
    // Assume the WebSocket is stored on Livechat.connection.ws or similar
    if (typeof Livechat !== 'undefined' && Livechat.connection && Livechat.connection.ws) {
        console.log('WebSocket found. Attaching listeners.');

        // Attach event listeners
        Livechat.connection.ws.addEventListener('message', function(event) {
            console.log('WebSocket message received:', event.data);

            try {
                const incomingMessage = JSON.parse(event.data);
                console.log('Parsed incoming message:', incomingMessage);

                if (incomingMessage.fields && incomingMessage.fields.args && incomingMessage.fields.args.length > 0) {
                    incomingMessage.fields.args.forEach(arg => {
                        let messageText = arg.msg;
                        let germanTranslation = arg.translations.de;

                        console.log('Extracted message text:', messageText);
                        console.log('Extracted German translation:', germanTranslation);
                    });
                } else {
                    console.log('No relevant fields or arguments found in the message.');
                }
            } catch (error) {
                console.error('Error processing message:', error);
            }
        });

        Livechat.connection.ws.addEventListener('open', function() {
            console.log('WebSocket connection opened:', Livechat.connection.ws);
        });

        Livechat.connection.ws.addEventListener('close', function() {
            console.log('WebSocket connection closed.');
        });

        Livechat.connection.ws.addEventListener('error', function(error) {
            console.error('WebSocket error:', error);
        });

        console.log('Listeners attached successfully.');
    } else {
        console.log('WebSocket not found yet. Retrying...');
        setTimeout(waitForWebSocket, 100); // Retry every 100ms
    }
})();
