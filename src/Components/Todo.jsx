import {useState} from "react";
import Form from "./Form";
import TodoItemList from "./TodoItemList";

export default function Todo()
{
    const [todos,setTodos] = useState([]);

    return (
        <div>
            <Form todos={todos} setTodos={setTodos}/>   
            
            { (todos.length == 0) ? <></> :  <TodoItemList todos={todos} setTodos={setTodos} />}
            
        </div>
    );
}