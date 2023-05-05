// Import all the responses
import responses from '../responses/responses.json' assert { type: "json" };

export function getStubResponse(chatbot) {
    // Isolate the responses for the given chatbot
    const chatbotResponses = responses[chatbot];

    // Isolate the responses for a random prompt
    const promptResponses = chatbotResponses[Math.floor(Math.random() * chatbotResponses.length)];

    // Return a random response
    return promptResponses[Math.floor(Math.random() * promptResponses.length)];
}