import { Todo } from "@/app/types/app"
import { notFound } from "next/navigation"

type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodo = async (todoId: string) => {
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`,
            // {cache:"force-cache"}// force-cache bitarje3ma l nextjs 2enu data static (sebte ma btet8ayar)(ye3ni ka2ani sta3malet "getStaticProps" li bl version l adim)
            { next: { revalidate: 60 } } // hon ye3ni kel 1min 7a yeb3at request

        );
        const todo = await res.json();
        return todo;
    } catch (error) {
        console.log(error)
    }
}
export const generateStaticParams = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos: Todo[] = await res.json();
    const someTodos=todos.splice(0,10);
    return someTodos.map(todo => (
        { todoId: todo.id.toString() } // l todoId hon hiye essm l folder li bimassel l route
    ))
}

const TodoPage = async ({ params: { todoId } }: PageProps) => {
    const todo: Todo = await fetchTodo(todoId);
   if(!todo.id){
    return notFound();
   }
//    throw new Error("Error occured");
    return (
        <div className="bg-yellow-100 p-10 rounded-md">
            <p>
                #{todo.id}:{todo.title}
            </p>
            <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
            <p className="border-t border-black mt-5 text-right">By User: {todo.userId}</p>
        </div>
    )
}

export default TodoPage