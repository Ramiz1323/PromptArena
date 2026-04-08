import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatOpenAI } from "@langchain/openai";
import config from "../config/config.js";

export const geminiModel = new ChatGoogle({
    apiKey: config.GOOGLE_API_KEY,
    model: "gemini-2.0-flash"
})

export const mistralModel = new ChatMistralAI({
    apiKey: config.MYSTRAL_API_KEY,
    model: "mistral-medium-latest"
})

export const openaiModel = new ChatOpenAI({
    apiKey: config.OPENAI_API_KEY,
    model: "gpt-4o"
})