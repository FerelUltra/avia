import styles from './Transfers.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store/store";
import { isChecked } from '../../store/reducers/counterReducer';

export const Transfers = (props: any) => {
    const checkboxes = useSelector((state: RootState)=> state.counter)
    const dispatch = useDispatch()
    return (
        <div className={styles.transfers}>
            <p>КОЛИЧЕСТВО ПЕРЕСАДОК</p>
            <div>
                <input onClick={()=> dispatch(isChecked('all'))} id="all" type="checkbox" checked={checkboxes.all} />
                <label className={styles.label} htmlFor="all">Все</label>
            </div>
            <div>
                <input onClick={()=> dispatch(isChecked('without'))} id="without" type="checkbox" checked={checkboxes.without}/>
                <label className={styles.label} htmlFor="without">Без пересадок</label>
            </div>
            <div>
                <input onClick={()=> dispatch(isChecked('one'))} id="1" type="checkbox" checked={checkboxes.one}/>
                <label className={styles.label} htmlFor="1">1 пересадка</label>
            </div>
            <div>
                <input onClick={()=> dispatch(isChecked('two'))} id="2" type="checkbox" checked={checkboxes.two}/>
                <label className={styles.label} htmlFor="2">2 пересадки</label>
            </div>
            <div>
                <input onClick={()=> dispatch(isChecked('three'))} id="3" type="checkbox" checked={checkboxes.three}/>
                <label className={styles.label} htmlFor="3">3 пересадки</label>
            </div>
        </div>
    )
}
