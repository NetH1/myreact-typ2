import { createSlice } from '@reduxjs/toolkit';


export interface ITask {
    tasks: {
        id?: Date | undefined,
        title: string,
        description: string,
        IsComplete: boolean,
        createdDate: Date
    }[],
    deletedTasks: {
        id?: Date | undefined,
        title: string,
        description: string,
        IsComplete: boolean,
        createdDate: Date
    }[],
}

export const initialState:ITask = {
    tasks: [
        {id:new Date(), title:'dasdas',createdDate: new Date(), description:'dsadasdas', IsComplete:false}
    ],
    deletedTasks:[]
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask(state, action) {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload);
            state.deletedTasks.push(state.tasks[taskIndex]);
            state.tasks.splice(taskIndex, 1);
          },
          restoreTask: (state, action) => {
            const taskIndex = state.deletedTasks.findIndex(task => task.id === action.payload);
            state.tasks.push(state.deletedTasks[taskIndex]);
            state.deletedTasks.splice(taskIndex, 1);
          },
    }
});

export const { addTask, deleteTask, restoreTask, } = tasksSlice.actions;


export default tasksSlice.reducer