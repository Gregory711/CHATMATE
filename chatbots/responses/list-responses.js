import fs from 'fs';

// Read the responses file
const responses = JSON.parse(fs.readFileSync('./chatbots/responses/responses.json'));

// Isolate the responses for the given chatbot
const chatbotResponses = responses[process.argv[2]];

// Isolate the responses for the given prompt
const promptResponses = chatbotResponses[parseInt(process.argv[3])];

// Add responses to table
const table = [];
for (let i = 0; i < promptResponses.length; i++) {
    table.push(promptResponses[i]);
}
// Print the table
console.table(table);