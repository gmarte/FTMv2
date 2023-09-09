
import openai from "@/openai";
import { NextResponse } from "next/server";
export async function POST(request: Request){
    // todos in body
    const { todos } = await request.json();    
    // comunicate with openAI
    // New
    try {
        const response = await openai.completions.create({
            model: "davinci-002",
            prompt: 'small message for fernando thanking him ( sarcasm ) for not getting me coffee',
            max_tokens: 30,
    });            
        return NextResponse.json(response.choices[0].text);
    } catch (error) {
        // if (error instanceof OpenAI.APIError) {
        // console.error(error.status);  // e.g. 401
        // console.error(error.message); // e.g. The authentication token you passed was invalid...
        // console.error(error.code);  // e.g. 'invalid_api_key'
        // console.error(error.type);  // e.g. 'invalid_request_error'
        // } else {
        // // Non-API error
        return NextResponse.json(error);
        // }
    }
    
}