interface Board {
    columns: Map<TypedColumn, Column>;
}

type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
    id: TypedColumn;
    todos: Todo[];
}

interface Todo {
    $id: string;
    $createdAt: string;
    title: string;
    status: TypedColumn;
    image?: Image;
}

interface Image{
    bucketId: string;
    fileId: string;
}

interface User {
    $id: string;
    $createdAt: string;
    $updatedAt: string;
    name: string;
    registration: string;
    status: boolean;
    passwordUpdate: string;
    email: string;
    phone: string;
    emailVerification: boolean;
    phoneVerification: boolean;
    prefs: Record<string, any>;  // Replace 'any' with the actual type if known
  }