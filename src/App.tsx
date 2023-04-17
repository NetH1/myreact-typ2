import  {FC, useState } from 'react'
import Header from './components/Header';
import TasksList from './components/TasksList';
import DeletedTasks from './components/DeletedTask';






const App:FC = () => {

  // const handleCompleteTask = (id:Date | undefined) => {
  //   setTasks((prevTasks) =>
  //     prevTasks.map((task) =>
  //       task.id === id ? { ...task, IsComplete: !task.IsComplete } : task
  //     )
  //   );
  // }

  return (
    <>
    <Header />
    <div className='bg-zinc-300 py-14'>
    <TasksList />
    <div className='flex flex-col justify-center '>
      <h1 className='text-center text-white text-3xl'>DeletedTasks</h1>
      <DeletedTasks />
    </div>
    </div>
    </>
  );
}

export default App;
