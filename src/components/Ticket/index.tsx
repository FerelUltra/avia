import styles from './Ticket.module.css'

export const Ticket = (props: any) => {
    const d1 = new Date(props.segments[0].date)
    const d2 = new Date(props.segments[0].date)
    const duration1 = props.segments[0].duration
    d2.setMinutes(d2.getMinutes() + duration1)
    const d3 = new Date(props.segments[1].date)
    const d4 = new Date(props.segments[1].date)
    const duration2 = props.segments[1].duration
    d4.setMinutes(d4.getMinutes() + duration2)

    function getTimeFromMins(mins: number) {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return hours + 'ч ' + minutes + 'м';
    };
    return (
        <div className={styles.ticket}>
            <div className={styles.price}>
                <span>{props.price} P</span>
                <img src='logo.png'></img>
            </div>
            <div className={styles.infos}>
                <div className={styles.info}>
                    <p className={styles.path}>{props.segments[0].origin} - {props.segments[0].destination}</p>
                    <p className={styles.time}>{d1.getHours()}:{d1.getMinutes()} - {d2.getHours()}:{d2.getMinutes()}</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>В ПУТИ</p>
                    <p className={styles.time}>{getTimeFromMins(duration1)}</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>ПЕРЕСАДКИ</p>
                    <p className={styles.time}>{props.segments[0].stops.join(',')}</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>{props.segments[1].origin} - {props.segments[1].destination}</p>
                    <p className={styles.time}>{d3.getHours()}:{d3.getMinutes()} - {d4.getHours()}:{d4.getMinutes()}</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>В ПУТИ</p>
                    <p className={styles.time}>{getTimeFromMins(duration2)}</p>
                </div>
                <div className={styles.info}>
                    <p className={styles.path}>ПЕРЕСАДКИ</p>
                    <p className={styles.time}>{props.segments[1].stops.join(',')}</p>
                </div>
            </div>
        </div>
    )
}
