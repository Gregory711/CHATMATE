import fs from 'fs';

// Read the prompts file
const prompts = JSON.parse(fs.readFileSync('./chatbots/prompts/prompts.json'));

// Add the new prompt to the prompts
prompts[process.argv[2]].push(process.argv[3]);

// Write the prompts file
fs.writeFileSync('./chatbots/prompts/prompts.json', JSON.stringify(prompts));

// Add empty responses array for the new prompt
const responses = JSON.parse(fs.readFileSync('./chatbots/responses/responses.json'));
responses[process.argv[2]].push([]);
fs.writeFileSync('./chatbots/responses/responses.json', JSON.stringify(responses));