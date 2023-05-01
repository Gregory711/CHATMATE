const fs = require('fs');

// Read the metadata file
const metadata = JSON.parse(fs.readFileSync('./chatbots/prompts/metadata.json'));

// Iterate over the chatbots and print their names
for (const chatbot of metadata) {
    console.log(chatbot[1]);
}