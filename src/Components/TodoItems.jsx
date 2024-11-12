import styles from './todoItems.module.css'
export default function TodoItems({item,todos,setTodos})
{
    function handleDelete(item)
    {
        setTodos(todos.filter( t => t != item));
    }

    function handleItemClick(itemName)
    {
        const arr = todos.map((t) => t.name === itemName ?  {...t, done : !t.done} : t);

        setTodos(arr);
    }

    const className = item.done ? styles.completed : "" ;

    return(<div className={styles.item}> 
        <div className={styles.itemName}>
            <span className={className} onClick={() => handleItemClick(item.name)}>{item.name}
            </span>
            <span>
                <button onClick={() => handleDelete(item)} className={styles.deleteButton}>x</button>
            </span>
        </div>
        <hr className={styles.line}/>
        </div>);
}