import Link from "next/link";
import { Todo } from "../types/app";

const fetchTodos = async () => {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos")
        const todos = await res.json();
        return todos
    } catch (error) {
        console.log(error)
    }

}


async function TodoList() {
    const todos: Todo[] = await fetchTodos();
    console.log(todos)
    return (
        todos.map(todo => (
            <p key={todo.id}>
                <Link href={`/todos/${todo.id.toString()}`}>Todo: {todo.id}</Link>
            </p>
        ))
    )
}

export default TodoList;

