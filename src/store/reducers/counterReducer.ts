import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

export const fetchTicketsId = createAsyncThunk(
    'tickets/fetchTicketsId',
    async function () {
        const response = await fetch('https://aviasales-test-api.kata.academy/search')
        const data = await response.json()
        return data
    }
)
export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async function fn(id: string) {
        const arr = []
        let stop
            try {
                const response = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`)
                const data = await response.json()
                data.tickets.forEach((el: any) => {
                    arr.push(el)
                })
                stop = data.stop
                if (data.stop){
                    console.log('stop')
                } else {
                    console.log('again')
                }
            } catch (e) {
                console.log(e)
            }
        return {arr, stop}
    }
)

export interface CounterState {
    all: boolean,
    without: boolean,
    one: boolean,
    two: boolean,
    three: boolean,
    status: null | string,
    error: null,
    ticketId: string,
    tickets: any[],
    option: IOption,
    stop: boolean,
    count: number
}

type IOption = 'cheap' | 'fast' | 'optimal'
const initialState: CounterState = {
    all: true,
    without: true,
    one: true,
    two: true,
    three: true,
    status: null,
    error: null,
    ticketId: '',
    tickets: [],
    option: 'cheap',
    stop: false,
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        isChecked: (state, action: PayloadAction<string>) => {
            // @ts-ignore
            state[action.payload] = !state[action.payload]
            if (action.payload === 'all' && state.all) {
                state.one = true
                state.two = true
                state.three = true
                state.without = true
            }
            if (action.payload === 'all' && !state.all) {
                state.one = false
                state.two = false
                state.three = false
                state.without = false
            }
            if (!state.one || !state.two || !state.three || !state.without) {
                state.all = false
            }
            if (state.one && state.two && state.three && state.without) {
                state.all = true
            }
        },
        setOption: (state, action: PayloadAction<IOption>) => {
            state.option = action.payload
        }
        // increment: (state) => {
        //     // Redux Toolkit allows us to write "mutating" logic in reducers. It
        //     // doesn't actually mutate the state because it uses the Immer library,
        //     // which detects changes to a "draft state" and produces a brand new
        //     // immutable state based off those changes
        //     state.value += 1
        // },
        // decrement: (state) => {
        //     state.value -= 1
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.value += action.payload
        // },
    },
    extraReducers: {
        [fetchTicketsId.pending]: (state: any, action: any) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchTicketsId.fulfilled]: (state: any, action: any) => {
            state.status = 'resolved'
            state.ticketId = action.payload
        },
        [fetchTicketsId.rejected]: (state: any, action: any) => {
            state.status = 'rejected'
        },
        [fetchTickets.fulfilled]: (state: any, action: any) => {
            if(!action.payload.stop){
                state.tickets = [...state.tickets, ...action.payload.arr]
                state.count+=1
            }
        }
    }
})

// Action creators are generated for each case reducer function
export const {isChecked, setOption} = counterSlice.actions

export default counterSlice.reducer
