"use client"
import React, { useContext } from 'react';
import { ThemeContext } from '@/Context/UserContext';

const ChildComponent = () => {
  const {count,setCount}=useContext(ThemeContext)
  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default ChildComponent;