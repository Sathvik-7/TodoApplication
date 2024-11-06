import {useState} from "react";
import TodoItems from "./TodoItems";
import styles from './form.module.css';

export default function Form({todos,setTodos})
{
    //const [todo,setTodo] = useState("");
    const [todo,setTodo] = useState({name:"",done:false});
    function handleInput(e)
    {
        setTodo({name : e.target.value , done : false });
    }

    function handleEvent(e)
    {
        e.preventDefault();
     
        if(todo.name == "")
            alert("Enter an item");
        else
        {        
            setTodos([...todos,todo]);
            setTodo({name:"",done:false});
        }
        
    }
    return(
        <form className={styles.todoform}  onSubmit={handleEvent}>
            <div className={styles.todoContainer}>
                <input className={styles.todoinput} onChange={handleInput} type="text" value={todo.name} placeholder="Enter todo item"/> {/* onChange={(e) => {setTodo(e.target.value)}} */}
                <button className={styles.todoButton} type="submit">Add</button>
            </div>
        </form>
    );
}