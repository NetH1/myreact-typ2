import React from 'react';
import { ITasks } from '../../App';
import CreateTask from '../CreateTask';

interface ITasksListProps {
    tasks:ITasks[],
    handleCreatePost:(task:ITasks) => void,
    handleDeleteTask:(id:Date | undefined) =>void,
    handleCompleteTask:(id:Date | undefined) =>void,
}

const TasksList: React.FC<ITasksListProps> = ({tasks, handleCreatePost, handleDeleteTask, handleCompleteTask}) => {
    return (
        <div className='container mx-auto'>
            <CreateTask handleCreatePost ={handleCreatePost} />
            <div className='grid grid-cols-3 gap-y-7 gap-x-5 mt-16'>
            {tasks.map(task =>
                <div key={task.id?.toLocaleString()} className={`bg-white flex flex-col px-7 py-6 ${task.IsComplete ? 'bg-green-600 text-white' : ''}`}>
                <span className='font-medium'>{task.title}</span>
                <p>{task.description}</p>
                <p className='flex justify-end'>{task.createdDate.toDateString()}</p>
                <div className='flex justify-between items-center mt-3'>
                <button className='bg-red-500 text-white rounded-lg py-2 px-4' onClick={() => handleDeleteTask(task.id)}>Удалить</button>
                <button className='bg-green-500 text-white rounded-lg py-2 px-4' onClick={() => handleCompleteTask(task.id)}>Завершить</button>
                </div>
                </div>
            )}
            </div>
        </div>
    );
};

export default TasksList;