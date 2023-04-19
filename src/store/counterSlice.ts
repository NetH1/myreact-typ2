import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
        incrementCount(state) {
            state.count +=1
        },
        decrementCount(state) {
            state.count -=1
        },
        multiplicationCount(state) {
            state.count *= 10
        },
        inputCount(state, action:PayloadAction <number>) {
            state.count += action.payload
        }
    }

});

export const {incrementCount, decrementCount, multiplicationCount, inputCount} = counterSlice.actions



export default counterSlice.reducer