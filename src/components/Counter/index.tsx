import React, {useState} from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { decrementCount, incrementCount, inputCount, multiplicationCount } from '../../store/counterSlice';

interface CounterProps {
    
}

const Counter: React.FC<CounterProps> = () => {
    const [number, setNumber] = useState('');
    const dispatch = useAppDispatch()
    const {count} = useAppSelector(state => state.counter)
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCount = parseInt(event.target.value);
        dispatch(inputCount(newCount))
      };
    return (
        <div className='bg-black py-16 gap-y-7 flex flex-col items-center justify-between'>
            <span className='text-white'>{count}</span>
            <button className='bg-white text-black px-5 py-3 rounded-xl' onClick={() => dispatch(incrementCount())}>+1</button>
            <button className='bg-white text-black px-5 py-3 rounded-xl' onClick={() => dispatch(decrementCount())}>-1</button>
            <button className='bg-white text-black px-5 py-3 rounded-xl' onClick={() => dispatch(multiplicationCount())}>*10</button>
            <input type="number" onChange={(e) => setNumber(e.target.value)} />
            <button  className='bg-white text-black px-5 py-3 rounded-xl' onClick={() => dispatch(inputCount(Number(number)))}>Добавить</button>
        </div>
    );
};

export default Counter;