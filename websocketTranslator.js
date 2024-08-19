(function waitForLivechat() {
    // Check if Livechat is defined
    if (typeof Livechat === 'undefined') {
        console.log('Livechat is not defined yet. Waiting...');
        setTimeout(waitForLivechat, 100); // Retry every 100ms
        return;
    }

    console.log('Livechat is now defined. Proceeding with WebSocket injection.');

    // Your original script logic follows here
    const originalConnect = Livechat.connection.connect;

    Livechat.connection.connect = async function() {
        console.log('WebSocket connection process initiated.');

        await originalConnect.apply(this, arguments);

        console.log('WebSocket connection established.');
        console.log('Livechat connection object:', this);
        console.log('WebSocket object:', this.ws);

        const originalOnMessage = this.ws.onmessage;

        this.ws.onmessage = function(event) {
            console.log('WebSocket message received:', event.data);

            if (typeof originalOnMessage === 'function') {
                originalOnMessage.call(this, event);
            }

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
