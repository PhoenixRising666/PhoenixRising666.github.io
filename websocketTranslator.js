(function() {
    // Array to store WebSocket instances
    const sockets = [];

    // Save the native WebSocket constructor
    const nativeWebSocket = window.WebSocket;

    // Override the global WebSocket constructor
    window.WebSocket = function(...args) {
        const socket = new nativeWebSocket(...args);
        sockets.push(socket);
        console.log('WebSocket captured:', socket);

        // Optionally, attach listeners directly here
        socket.addEventListener('message', function(event) {
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

        socket.addEventListener('open', function() {
            console.log('WebSocket connection opened:', socket);
        });

        socket.addEventListener('close', function() {
            console.log('WebSocket connection closed.');
        });

        socket.addEventListener('error', function(error) {
            console.error('WebSocket error:', error);
        });

        return socket;
    };

    // Example: Doing something with the sockets after a delay
    setTimeout(() => {
        console.log('Captured WebSocket instances:', sockets);
        // You can now interact with the captured WebSockets here
        // For example, log all messages from all captured sockets:
        sockets.forEach((socket, index) => {
            console.log(`WebSocket ${index + 1}:`, socket);
            // You could add more event listeners or send messages here
        });
    }, 1000);

    console.log('WebSocket override script injected successfully.');
})();
