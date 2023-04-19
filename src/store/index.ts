import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './tasksSlice';
import counterSlice from './counterSlice';


const store = configureStore({
  reducer: {
    tasks: tasksSlice,
    counter:counterSlice
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;


export default store;
