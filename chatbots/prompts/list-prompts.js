import fs from 'fs';

// Read in the prompts data
const data = JSON.parse(fs.readFileSync('./chatbots/prompts/prompts.json'));

// Isolate the prompts for the given chatbot
const prompts = data[process.argv[2]];

// Iterate over the prompts and print them
for (const prompt of prompts) {
    console.log(prompt);
}