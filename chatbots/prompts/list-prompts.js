const fs = require('fs');

// Compute the filepath based on command line parameter
const filepath = (process.argv[2]).replace(/\s/g, '') + '.json';

// Read the prompts file
const prompts = JSON.parse(fs.readFileSync('./chatbots/prompts/' + filepath));

// Iterate over the prompts and print them
for (const prompt of prompts) {
    console.log(prompt);
}