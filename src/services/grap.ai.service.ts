import { StateSchema, MessagesValue, StateGraph, START, END } from "@langchain/langgraph";

type JUDGEMENT = {
    winner: "solution_1" | "solution_2" | "tie";
    solution_1_score: string;
    solution_2_score: string;
};


type PromptArenaState = {
    messages: typeof MessagesValue;
    solution_1: string;
    solution_2: string;
    judgement: JUDGEMENT;
};

const state: PromptArenaState = {
    messages: MessagesValue,
    solution_1: "",
    solution_2: "",
    judgement: {
        winner: "tie",
        solution_1_score: "",
        solution_2_score: ""
    }
};