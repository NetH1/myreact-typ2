import React from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { restoreTask } from '../../store/tasksSlice';

interface DeletedTasksProps {
    
}

const DeletedTasks: React.FC<DeletedTasksProps> = () => {
    const {deletedTasks} = useAppSelector((state) => state.tasks)
    const dispatch = useAppDispatch()
    return (
        <div className='block mx-auto'>
            <div className='grid grid-cols-3 gap-y-7 gap-x-5 mt-16'>
            {deletedTasks.map(task =>
                <div key={task.id?.toLocaleString()} className={`bg-white flex flex-col px-7 py-6 ${task.IsComplete ? 'bg-green-600 text-white' : ''}`}>
                <span className='font-medium'>{task.title}</span>
                <p>{task.description}</p>
                <p className='flex justify-end'>{task.createdDate.toDateString()}</p>
                <div className='flex justify-between items-center mt-3'>
                <button className='bg-yellow-500 text-white rounded-lg py-2 px-4' onClick={() => dispatch(restoreTask(task.id))}>Восстановить</button>
                </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default DeletedTasks;