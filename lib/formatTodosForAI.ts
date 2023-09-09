const formatTodosForAI = (board: Board) => {
    const todos = Array.from(board.columns.entries());
    console.log(`fotmat to dos ${todos}`);

    const flatArray = todos.reduce((map, [key, value]) => {
        map[key] = value.todos;
        return map;
    }, {} as { [key in TypedColumn]: Todo[]});

    const flayArrayCounted = Object.entries(flatArray).reduce(
        (map, [key, value]) => {
            map[key as TypedColumn] = value.length;
            return map;
        },
        {} as {[key in TypedColumn]: number}
        );
    return flayArrayCounted;
}
export default formatTodosForAI;