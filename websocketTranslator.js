// Create a WebSocket connection to the server
const ws = new WebSocket('wss://morgan-ec2-test.ps-rocketchat.com/websocket');

// Arrays to store messages and German translations
let messages = [];
let germanTranslations = [];

// Event listener for when the WebSocket connection opens
ws.onopen = () => {
    console.log('Connected to WebSocket');
};

// Event listener for incoming messages
ws.onmessage = (event) => {
    // Parse the incoming message as JSON
    let incomingMessage = JSON.parse(event.data);
    
    // Process the message to extract the "msg" and "de" translation
    processMessage(incomingMessage);
};

// Event listener for WebSocket errors
ws.onerror = (error) => {
    console.error('WebSocket Error: ', error);
};

// Event listener for when the WebSocket connection closes
ws.onclose = () => {
    console.log('WebSocket connection closed');
};

// Function to process the message
function processMessage(msg) {
    if (msg.fields && msg.fields.args && msg.fields.args.length > 0) {
        msg.fields.args.forEach(arg => {
            // Capture the message text
            let messageText = arg.msg;
            messages.push(messageText);
            
            // Capture the German translation
            let germanTranslation = arg.translations.de;
            germanTranslations.push(germanTranslation);
        });
    }
    
    // Log the captured data for debugging
    console.log('Messages:', messages);
    console.log('German Translations:', germanTranslations);
}
