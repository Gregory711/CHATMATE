import fs from 'fs';

// Read the metadata file
const metadata = JSON.parse(fs.readFileSync('./chatbots/prompts/metadata.json'));

// Iterate over the chatbots and print their names
for (const chatbot in metadata) {
    console.log(chatbot);
}