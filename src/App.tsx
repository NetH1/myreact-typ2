import  {FC, Key, useState } from 'react'
import Header from './components/Header';
import TasksList from './components/TasksList';




export interface ITasks{
  id?:Date | undefined,
  title:string,
  description:string,
  IsComplete: boolean,
  createdDate:Date
} 

const App:FC = () => {
  const [tasks, setTasks] = useState<ITasks[]>([])

  const handleCreatePost = (task: ITasks) => {
    setTasks([...tasks, task]);
  };
  const handleDeleteTask = (id:Date | undefined) => {
    const newTasks = tasks.filter(task => task.id !== id);
    setTasks(newTasks);
  }
  const handleCompleteTask = (id:Date | undefined) => {
    const newTasks = tasks.map((task) =>
    task.id === id ? { ...task, IsComplete: true } : task
  );
  setTasks(newTasks);
  }

  return (
    <>
    <Header />
    <div className='bg-zinc-300 py-14'>
    <TasksList handleCreatePost = {handleCreatePost} handleDeleteTask= {handleDeleteTask} tasks = {tasks} handleCompleteTask = {handleCompleteTask} />
    </div>
    </>
  );
}

export default App;
