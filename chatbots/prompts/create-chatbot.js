import fs from 'fs';

// Create array for new chatbot using command line parameter
// e.g. ["Cartoon Villain",["he","him","his"],"a cartoonish villain","the villains"]
const name = process.argv[2];
const pronouns = process.argv[3].split(',');
const chatbot = [name, pronouns, process.argv[4], process.argv[5]];

// Read the metadata file
const metadata = JSON.parse(fs.readFileSync('./chatbots/prompts/metadata.json'));

// Add the new chatbot to the metadata
metadata.push(chatbot);

// Write the metadata file
fs.writeFileSync('./chatbots/prompts/metadata.json', JSON.stringify(metadata));

// Create the new chatbot prompts array
const prompts = JSON.parse(fs.readFileSync('./chatbots/prompts/prompts.json'));
prompts[chatbot[0]] = [];
fs.writeFileSync('./chatbots/prompts/prompts.json', JSON.stringify(prompts));

// Create the new chatbot responses array
const responses = JSON.parse(fs.readFileSync('./chatbots/responses/responses.json'));
responses[chatbot[0]] = {};
fs.writeFileSync('./chatbots/responses/responses.json', JSON.stringify(responses));