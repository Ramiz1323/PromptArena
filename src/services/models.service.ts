import { ChatGoogle } from "@langchain/google";
import { ChatMistralAI } from "@langchain/mistralai";
import { ChatGroq } from "@langchain/groq";
import config from "../config/config.js";

export const geminiModel = new ChatGoogle({
    apiKey: config.GOOGLE_API_KEY,
    model: "gemini-2.0-flash"
})

export const mistralModel = new ChatMistralAI({
    apiKey: config.MYSTRAL_API_KEY,
    model: "mistral-medium-latest"
})

export const groqModel = new ChatGroq({
    apiKey: config.GROQ_API_KEY,
    model: "llama3-8b-8192"
})