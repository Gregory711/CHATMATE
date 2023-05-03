// Import all the prompts
import prompts from '../chatbots/prompts/prompts.json' assert { type: "json" };

const CHATBOTSPORT = 3000;

// Returns mode e.g. { mode: 'openai' }
async function getMode() {
    try {
        const response = await fetch('http://localhost:' + CHATBOTSPORT + '/mode');
        if (response.status === 200) {
            const mode = await response.json();
            return mode;
        }
    } catch (err) {}
    return { mode: 'stub' };
}

/**
 * Returns a random prompt for the given chatbot
 * @param chatbot - The chatbot name getting a prompt for
 */
function getPrompt(chatbot) {
    const chatbotPrompts = prompts[chatbot];
    const prompt = chatbotPrompts[Math.floor(Math.random() * chatbotPrompts.length)];
    return prompt;
}