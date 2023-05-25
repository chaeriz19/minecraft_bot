import * as OpenAI from 'openai';
import { GptAPI } from 'openai';
const openai = new GptAPI('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');

export async function generateResponse(message: string): Promise<string> {
const prompt = 'User: ' + message + '\nAssistant:';
    const options = {
        model: 'text-davinci-003', 
        prompt: prompt,
        maxTokens: 50,
        temperature: 0.7
    };
    const response = await openai.complete(options);
    const reply = response.choices[0].text.trim();
    return reply;
}

export default openai;
