import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    all: boolean,
    without: boolean,
    one: boolean,
    two: boolean,
    three: boolean
}

const initialState: CounterState = {
    all: false,
    without: false,
    one: false,
    two: false,
    three: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        isChecked: (state,action: PayloadAction<string>) =>{
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
            console.log(state.all)
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
})

// Action creators are generated for each case reducer function
export const { isChecked} = counterSlice.actions

export default counterSlice.reducer
