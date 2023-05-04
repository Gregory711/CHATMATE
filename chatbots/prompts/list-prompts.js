import fs from 'fs';

// Read in the prompts data
const data = JSON.parse(fs.readFileSync('./chatbots/prompts/prompts.json'));

// Isolate the prompts for the given chatbot
const prompts = data[process.argv[2]];

// Add prompts to table
const table = [];
for (let i = 0; i < prompts.length; i++) {
    table.push(prompts[i]);
}
// Print the table
console.table(table);