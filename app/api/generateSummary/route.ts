
import openai from "@/openai";
import { NextResponse } from "next/server";
export async function POST(request: Request){
    // todos in body
    const {todos} = await request.json();
    console.log(`this are the todos: ${todos}`);

    // comunicate with openAI
    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        // temperature: 0.8,
        // n:1,
        // stream: false,
        messages: [
            {
                role: "system",
                content: `When responding, welcome the user always as Mr. Giancarlo and say wecolme to the APP Limit the response to 200 characters`,
            },
            {
                role: "user",
                content: `Hi there, provide a summary off the following todos. Count how many todos are in each category such as to do, in progress, and done, then tell the user to have a productive day! Here's the data: ${JSON.stringify(todos)}`,
            },
        ]
    });    
    console.log("DATA IS: ", response);
    return NextResponse.json(response.choices[0].message);
}