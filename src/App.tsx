import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Ticket} from "./components/Ticket";
import type {PaginationProps} from 'antd';
import 'antd/dist/antd.css'
import {Col, Input, Pagination, Spin, Tabs} from "antd"
import {json} from "stream/consumers";
import {CheckboxValueType} from 'antd/lib/checkbox/Group';
import Checkbox, {CheckboxChangeEvent} from 'antd/lib/checkbox';
import {Transfers} from "./components/Transfers";
import {Options} from "./components/Options";
import {useDispatch, useSelector} from "react-redux";
import {CounterState, fetchTickets, fetchTicketsId} from "./store/reducers/counterReducer";
import {RootState} from "./store/store";
import {v4 as uuidv4} from "uuid"

function App() {
    const [checkAll, setCheckAll] = useState(false);
    const {
        ticketId,
        stop,
        count,
        tickets,
        option,
        without,
        one,
        two,
        three,
        all
    } = useSelector((state: RootState) => state.counter)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTicketsId())
    }, [])
    useEffect(() => {
        dispatch(fetchTickets(ticketId.searchId))
        console.log(ticketId, 'ticketId')
        console.log(tickets)
    }, [ticketId, tickets])
    return (

        <div className="App">
            <div><img src="plane.png" alt=""/></div>
            <div style={{display: "flex"}}>
                <Transfers/>
                <div style={{marginLeft: "20px"}}>
                    <Options/>
                    {tickets.length ? tickets.slice().filter((el) => {
                        const stops = el.segments[0].stops.length
                        if (all) {
                            return true
                        }
                        if (without && one && two) {
                            return stops === 0 || stops === 1 || stops === 2
                        }
                        if (without && one && three) {
                            return stops === 0 || stops === 1 || stops === 3
                        }
                        if (without && two && three) {
                            return stops === 0 || stops === 2 || stops === 3
                        }
                        if (one && two && three) {
                            return stops === 1 || stops === 2 || stops === 3
                        }
                        if (without && one) {
                            return stops === 0 || stops === 1
                        }
                        if (without && two) {
                            return stops === 0 || stops === 2
                        }
                        if (without && three) {
                            return stops === 0 || stops === 3
                        }
                        if (one && two) {
                            return stops === 1 || stops === 2
                        }
                        if (one && three) {
                            return stops === 1 || stops === 3
                        }
                        if (two && three) {
                            return stops === 2 || stops === 3
                        }
                        if (without) {
                            return stops === 0
                        }
                        if (one) {
                            return stops === 1
                        }
                        if (two) {
                            return stops === 2
                        }
                        if (three) {
                            return stops === 3
                        }
                    }).sort(function (a, b) {
                        if (option === 'cheap') {
                            return a.price - b.price
                        }
                        if (option === 'fast') {
                            return a.segments[0].duration - b.segments[0].duration
                        }
                    }).map(({price, carrier, segments}) => <Ticket price={price}
                                                                   carrier={carrier}
                                                                   segments={segments}
                                                                   key={uuidv4()}
                    />) : <div>...Loading</div>}
                </div>
            </div>

        </div>
    );
}

export default App;
