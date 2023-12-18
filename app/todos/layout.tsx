
import TodoList from "../components/TodoList"

const layout = ({children}:{children:React.ReactNode}) => {
  return (
    <main className="flex">
        <div>
            <TodoList/>
        </div>
        <div className="flex-1">
            {children} 
        </div>
    </main>
  )
}
// l children hon betmasel l page li b2alb folder l todos
export default layout