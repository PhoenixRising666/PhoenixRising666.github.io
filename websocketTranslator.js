(function() {
    console.log('Injected script started. Waiting for WebSocket connection...');

    // Save a reference to the original connect function
    const originalConnect = Livechat.connection.connect;

    // Override the connect function to inject the message listener after connection
    Livechat.connection.connect = async function() {
        console.log('WebSocket connection process initiated.');

        // Call the original connect function
        await originalConnect.apply(this, arguments);

        console.log('WebSocket connection established.');

        // Add logging for the WebSocket object itself
        console.log('Livechat connection object:', this);
        console.log('WebSocket object:', this.ws);

        // Save the original onmessage handler (if any)
        const originalOnMessage = this.ws.onmessage;

        // Override the onmessage handler to add custom logging and processing
        this.ws.onmessage = function(event) {
            console.log('WebSocket message received:', event.data);

            // Call the original onmessage handler if it exists
            if (typeof originalOnMessage === 'function') {
                originalOnMessage.call(this, event);
            }

            // Process the message
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
        };

        console.log('Custom WebSocket message handler injected successfully.');
    };

    console.log('WebSocket connection override set up complete.');
})();
