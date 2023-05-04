import {jest} from '@jest/globals'
import { Chat } from "../chatbots/chat";

describe("get a prompt", () => {
    it("should get a prompt using default chatbot", () => {
        const spy = jest.spyOn(Chat, 'getChatbotPrompt').mockReturnValue('Test');
        const prompt = Chat.getPrompt();
        expect(spy).toHaveBeenCalledWith('Cartoon Villain');
        expect(prompt).toBe('Test');
    });
    it("should get a prompt using stored chatbot", () => {
        localStorage.setItem('chatbot', 'King Arthur');
        const spy = jest.spyOn(Chat, 'getChatbotPrompt').mockReturnValue('Test');
        const prompt = Chat.getPrompt();
        expect(spy).toHaveBeenCalledWith('King Arthur');
        expect(prompt).toBe('Test');
    });
});