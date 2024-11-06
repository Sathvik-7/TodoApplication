import TodoItems from "./TodoItems";
import styles from './todoItemList.module.css';

export default function TodoItemList({todos,setTodos})
{
    return(<div className={styles.list}>
        {
                todos.map( (items) => 
                                (  
                                    <TodoItems key={items.name}  item = {items} todos={todos} setTodos={setTodos}/>
                                )
                           )
        }
    </div>);
}