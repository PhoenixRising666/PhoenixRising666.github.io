// Assuming `ws` is your WebSocket instance from your existing code

// Add listener for incoming messages
ws.onmessage = (event) => {
    let incomingMessage = JSON.parse(event.data);
    
    // Process the message to extract the "msg" and "de" translation
    processMessage(incomingMessage);
};

// Function to process the message
function processMessage(msg) {
    if (msg.fields && msg.fields.args && msg.fields.args.length > 0) {
        msg.fields.args.forEach(arg => {
            let messageText = arg.msg;
            let germanTranslation = arg.translations.de;

            console.log('Message:', messageText);
            console.log('German Translation:', germanTranslation);
        });
    }
}
