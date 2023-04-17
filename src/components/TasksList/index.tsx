import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { deleteTask } from '../../store/tasksSlice';
import CreateTask from '../CreateTask';

interface ITasksListProps {
}

const TasksList: React.FC<ITasksListProps> = () => {
    const dispatch = useAppDispatch()
    const {tasks} = useAppSelector((state) => state.tasks)
    return (
        <div className='container mx-auto'>
            <CreateTask />
            <div className='grid grid-cols-3 gap-y-7 gap-x-5 mt-16'>
            {tasks.map(task =>
                <div key={task.id?.toLocaleString()} className={`bg-white flex flex-col px-7 py-6 ${task.IsComplete ? 'bg-green-600 text-white' : ''}`}>
                <span className='font-medium'>{task.title}</span>
                <p>{task.description}</p>
                <p className='flex justify-end'>{task.createdDate.toDateString()}</p>
                <div className='flex justify-between items-center mt-3'>
                <button className='bg-red-500 text-white rounded-lg py-2 px-4' onClick={() => dispatch(deleteTask(task.id))}>Удалить</button>
                </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default TasksList;