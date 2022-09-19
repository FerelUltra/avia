import styles from './Options.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {setOption} from "../../store/reducers/counterReducer";

export const Options = (props: any) => {
    const {option} = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()
    return (
        <div className={styles.options}>
            <div style={{
                background: `${option === 'cheap' ? 'blue' : 'white'}`,
                color: `${option === 'cheap' ? 'white' : 'black'}`
            }}
                 className={styles.option}
                 onClick={() => {
                     dispatch(setOption('cheap'))
                 }}
            >Самый дешевый
            </div>
            <div style={{
                borderLeft: "1px solid #DFE5EC",
                borderRight: "1px solid #DFE5EC",
                background: `${option === 'fast' ? 'blue' : 'white'}`,
                color: `${option === 'fast' ? 'white' : 'black'}`
            }}
                 className={styles.option}
                 onClick={() => {
                     dispatch(setOption('fast'))
                 }}
            >Самый быстрый
            </div>
            <div style={{
                background: `${option === 'optimal' ? 'blue' : 'white'}`,
                color: `${option === 'optimal' ? 'white' : 'black'}`
            }}
                 className={styles.option}
                 onClick={() => {
                     dispatch(setOption('optimal'))
                 }}
            >оптимальный
            </div>
        </div>
    )
}
