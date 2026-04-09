import "dotenv/config";


type CONFIG = {
    readonly GOOGLE_API_KEY: string;
    readonly MYSTRAL_API_KEY: string;
    readonly GROQ_API_KEY: string;
}

const config: CONFIG = {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || "",
    MYSTRAL_API_KEY: process.env.MYSTRAL_API_KEY || "",
    GROQ_API_KEY: process.env.GROQ_API_KEY || ""
}

export default config;