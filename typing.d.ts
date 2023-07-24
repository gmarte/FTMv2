interface Board {
    columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
    id: TypedColumn,
    todos: Todo[]
}

interface Todo{
    $id: string;
    $createAt: string;
    title: string;
    status: TypedColumn;
    imagge?: Image;
}

interface Image{
    bucketId: string;
    fileId: string;
}