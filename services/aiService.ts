import OpenAI from 'openai';
import { SYSTEM_INSTRUCTION } from '../constants';

// Initialize the OpenAI client for OpenRouter
const ai = new OpenAI({
    baseURL: 'https://openrouter.ai/api/v1',
    apiKey: process.env.API_KEY,
    dangerouslyAllowBrowser: true // Enabling for client-side demo; normally this should be backend-only
});

export const sendMessageStream = async (message: string) => {
    try {
        const stream = await ai.chat.completions.create({
            model: 'meta-llama/llama-3.3-70b-instruct',
            messages: [
                { role: 'system', content: SYSTEM_INSTRUCTION },
                { role: 'user', content: message }
            ],
            stream: true,
        }, {
            headers: {
                "HTTP-Referer": "https://estateai.com", // Optional: Update with your actual site URL
                "X-Title": "EstateAI Assistant" // Optional: Update with your actual site title
            }
        });

        return stream;
    } catch (error) {
        console.error("Error sending message to AI:", error);
        throw error;
    }
};

export const resetChatSession = () => {
    // Stateless API, nothing to reset in the client
    // If we maintained history locally, we would clear it here
};
