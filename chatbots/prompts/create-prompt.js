const fs = require('fs');

// Check that the command line parameter is valid
const filepath = (process.argv[2]).replace(/\s/g, '') + '.json';
if (!fs.existsSync('./chatbots/prompts/' + filepath)) {
    console.log('Invalid chatbot name');
    process.exit(1);
}

// Read the prompts file
const prompts = JSON.parse(fs.readFileSync('./chatbots/prompts/' + filepath));

// Add the new prompt to the prompts
prompts.push(process.argv[3]);

// Write the prompts file
fs.writeFileSync('./chatbots/prompts/' + filepath, JSON.stringify(prompts));