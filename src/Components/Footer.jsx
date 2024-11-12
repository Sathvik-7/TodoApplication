import styles from "./footer.module.css"
export default function Footer({compItems,totalTodos})
{
    return (
        <div className={styles.footer}>
            <span className={styles.item}>Completed todos : {compItems}</span>
            <span className={styles.item}>Total todos : {totalTodos}</span>
        </div>
    );
}