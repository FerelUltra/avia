import styles from './Options.module.css'

export const Options = (props: any) => {
    return (
        <div className={styles.options}>
            <div className={styles.option}>Самый дешевый</div>
            <div style={{borderLeft: "1px solid #DFE5EC", borderRight: "1px solid #DFE5EC"}} className={styles.option}>Самый быстрый</div>
            <div className={styles.option}>оптимальный</div>
        </div>
    )
}
