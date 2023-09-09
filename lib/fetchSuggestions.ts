import formatTodosForAI from "./formatTodosForAI";

const fetchSuggestion = async (board:Board) => {    
    const todos = formatTodosForAI(board);
    console.log(`fetch suggestions ${todos}`);

    const res = await fetch('/api/generateSummary', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",            
        },
        body: JSON.stringify({ todos }),
    });
    const GPTdata = await res.json();
    console.log(`GPT DATA: ${JSON.stringify(GPTdata)}`);
    const { content } = GPTdata;

    return content;
}
export default fetchSuggestion;