// Import all the prompts
import prompts from '../chatbots/prompts/prompts.json' assert { type: "json" };
import metadata from '../chatbots/prompts/metadata.json' assert { type: "json" };
import { getStubResponse } from './responses/stub.js';

const CHATBOTSPORT = 3000;

export class Chat{
    // Returns mode e.g. { mode: 'openai' }
    static async getMode() {
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
     * Returns the selected chatbot e.g. { chatbot: 'Cartoon Villain' }
     * @returns The selected chatbot or 'Cartoon Villain' by default
     */
    static getSelectedChatbot() {
        let chatbot = localStorage.getItem('chatbot');
        if (!chatbot) {
            chatbot = 'Cartoon Villain';
        }
        return chatbot;
    }

    /**
     * Returns a random prompt for the given chatbot
     * @param chatbot - The chatbot name getting a prompt for
     */
    static getChatbotPrompt(chatbot) {
        const chatbotPrompts = prompts[chatbot];
        const prompt = chatbotPrompts[Math.floor(Math.random() * chatbotPrompts.length)];
        return prompt;
    }

    /**
     * Gets the metadata for the given chatbot and uses it to format the prompt
     * @param chatbot - The chatbot name getting a prompt for
     * @param prompt - The prompt to format
     * @returns The formatted prompt
     */
    static formatPrompt(chatbot, prompt) {
        const chatbotMetadata = metadata[chatbot];
        if (chatbotMetadata === undefined) {
            console.log("Unable to find metadata for chatbot: " + chatbot);
            return prompt;
        }
        const pronouns = chatbotMetadata[0];
        const name1 = chatbotMetadata[1];
        const name2 = chatbotMetadata[2];
        prompt = prompt.replace("PRONOUN1", pronouns[0]);
        prompt = prompt.replace("PRONOUN2", pronouns[1]);
        prompt = prompt.replace("PRONOUN3", pronouns[2]);
        prompt = prompt.replace("NAME1", name1);
        prompt = prompt.replace("NAME2", name2);
        return prompt;
    }

    /**
     * Gets a random formatted prompt for chosen chatbot or 'Cartoon Villain' by default
     * @returns A random formatted prompt for the chatbot stored in localStorage or 'Cartoon Villain' if none is stored
     */
    static getPrompt() {
        const chatbot = Chat.getSelectedChatbot();
        const prompt = Chat.getChatbotPrompt(chatbot);
        return this.formatPrompt(chatbot, prompt);
    }

    /**
     * Returns a random response for the selected chatbot
     * @returns A random response for the selected chatbot or relays error message from set mode
     */
    static async getChatbotResponse() {
        const mode = await Chat.getMode();
        const prompt = Chat.getPrompt();
        if (mode.mode === 'openai' || mode.mode === 'local') {
            try {
                const response = await fetch('http://localhost:' + CHATBOTSPORT + '/chat/?message=' + prompt);
                const data = await response.json();
                if (response.status === 200) {
                    console.log(data);
                    return data;
                }
            } catch (err) {}
        }
        else if (mode.mode === 'stub') {
            const chatbot = Chat.getSelectedChatbot();
            return getStubResponse(chatbot);
        }
        else {
            return 'Error Unsupported Mode: ' + mode.message;
        }
    }
}