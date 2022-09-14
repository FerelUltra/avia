import styles from './Ticket.module.css'

export const Ticket = (props: any) => {
    return (
        <div className={styles.ticket}>
            <div className={styles.price}>
                <span>13 400 p</span>
                <img src='logo.png'></img>
            </div>
            <div className={styles.infos}>
                <div className={styles.info}>
                    <p className={styles.path}>MOW - HKT</p>
                    <p className={styles.time}>10:45 - 08:00</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>MOW - HKT</p>
                    <p className={styles.time}>10:45 - 08:00</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>MOW - HKT</p>
                    <p className={styles.time}>10:45 - 08:00</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>MOW - HKT</p>
                    <p className={styles.time}>10:45 - 08:00</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>MOW - HKT</p>
                    <p className={styles.time}>10:45 - 08:00</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>MOW - HKT</p>
                    <p className={styles.time}>10:45 - 08:00</p>
                </div>
            </div>
        </div>
    )
}
