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

const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];
const defaultCheckedList = ['Apple', 'Orange'];

function App() {
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };
    return (

        <div className="App">
            <div><img src="plane.png" alt=""/></div>
            <div style={{display: "flex"}}>
                <Transfers/>
                <div style={{marginLeft: "20px"}}>
                    <Options/>
                    <Ticket/>
                </div>
            </div>

        </div>
    );
}

export default App;
