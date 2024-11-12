import {useState} from "react";
import Form from "./Form";
import TodoItemList from "./TodoItemList";
import Footer from "./Footer";

export default function Todo()
{
    const [todos,setTodos] = useState([]);

    const completedItems = todos.filter((t) => t.done).length;

    const totalTodos = todos.length;

    return (
        <div>
            <Form todos={todos} setTodos={setTodos}/>   
            
            { (todos.length == 0) ? <></> :  <TodoItemList todos={todos} setTodos={setTodos} />}
            
            <Footer compItems = {completedItems} totalTodos = {totalTodos}/> 

        </div>
    );
}