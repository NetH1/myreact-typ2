import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { ITasks } from '../../App';

interface ICreateTaskProps {
    handleCreatePost:(task:ITasks) => void
}

const CreateTask: React.FC<ICreateTaskProps> = ({handleCreatePost}) => {
    const [taskform, setTaskform] = useState({
        title:'',
        description:''
    })
    const HandlerChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} =e.target
        setTaskform((prev) => ({
            ...prev,
            [name]:value
        })) 
    }
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTask:ITasks ={
            id:new Date(),
            title:taskform.title,
            description:taskform.description,
            IsComplete: false,
            createdDate:new Date()
        }
        handleCreatePost(newTask)
    setTaskform({title:'', description:''});
      };
    return (
        <div className='grid place-items-center bg-white w-fit px-8 py-4'>
            <Box  onSubmit={handleSubmit} className='flex justify-center gap-y-6 flex-col' component="form">
            <TextField onChange={HandlerChange} name='title'  className='w-fit' value={taskform.title} id="standard-basic" label="Заголовок" variant="standard" />
            <TextField onChange={HandlerChange}  name='description' className='w-fit' value={taskform.description} id="outlined-basic" label="Ваша заметка" variant="outlined" />
            <Button type='submit' className='w-fit block float-right' variant="contained">Сохранить</Button>
            </Box>
        </div>
    );
};

export default CreateTask;