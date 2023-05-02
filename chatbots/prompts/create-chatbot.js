const fs = require('fs');

// Create array for new chatbot using command line parameter
// e.g. if name is "My Chatbot", chatbot will be ["MyChatbot.json", "My Chatbot"]
const name = process.argv[2];
const chatbot = [(name).replace(/\s/g, '') + '.json', name];

// Read the metadata file
const metadata = JSON.parse(fs.readFileSync('./chatbots/prompts/metadata.json'));

// Add the new chatbot to the metadata
metadata.push(chatbot);

// Write the metadata file
fs.writeFileSync('./chatbots/prompts/metadata.json', JSON.stringify(metadata));

// Create the new chatbot prompts file
fs.writeFileSync('./chatbots/prompts/' + chatbot[0], JSON.stringify([]));
