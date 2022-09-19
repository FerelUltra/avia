import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export const fetchTicketsId = createAsyncThunk(
    'tickets/fetchTicketsId',
    async function (){
        const response = await fetch('https://front-test.dev.aviasales.ru/search')
        const data = await response.json()
        return data
    }
)
export const fetchTickets = createAsyncThunk(
    'tickets/fetchTickets',
    async function (id){
        const response = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${id}`)
        const data = await response.json()
        return data.tickets
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
    option: IOption
}
type IOption = 'cheap' | 'fast' | 'optimal'
const initialState: CounterState = {
    all: false,
    without: false,
    one: false,
    two: false,
    three: false,
    status: null,
    error: null,
    ticketId: '',
    tickets: [],
    option: 'cheap'
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        isChecked: (state,action: PayloadAction<string>) =>{
            // @ts-ignore
            state[action.payload] = !state[action.payload]
            if (action.payload === 'all' && state.all){
                state.one = true
                state.two = true
                state.three = true
                state.without = true
            }
            if(action.payload === 'all' && !state.all){
                state.one = false
                state.two = false
                state.three = false
                state.without = false
            }
            if (!state.one || !state.two || !state.three || !state.without){
                state.all = false
            }
            if (state.one && state.two && state.three && state.without){
                state.all = true
            }
        },
        setOption: (state, action: PayloadAction<IOption>) =>{
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
        [fetchTicketsId.pending]: (state: any, action: any) =>{
            state.status = 'loading'
            state.error = null
        },
        [fetchTicketsId.fulfilled]: (state: any, action: any) =>{
            state.status = 'resolved'
            state.ticketId = action.payload
        },
        [fetchTicketsId.rejected]: (state: any, action: any) =>{
            state.status = 'rejected'
        },
        [fetchTickets.fulfilled]: (state: any, action: any) =>{
            state.tickets = action.payload
        }
    }
})

// Action creators are generated for each case reducer function
export const { isChecked, setOption} = counterSlice.actions

export default counterSlice.reducer
