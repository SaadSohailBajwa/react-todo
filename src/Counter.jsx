import React from 'react'
import { useState,useReducer } from 'react'




function countReducer(count,action){
  
  switch(action.type){
    case ('increment') : {
      return count+1
    }
    case ('decrement') : {
      return count - 1
    }
    case ('reset') : {
      return 0
    }
    case ('setTo') : {
      return action.value
    }
  }
}






function Counter() {
  const [count,dispatch] = useReducer(countReducer,0);
  
  // function handleIncrement(){
  //   setCount(count+1)
  // }

  // function handleDecrement(){
  //   setCount(count-1)
  // }

  // function handleReset(){
  //   setCount(0)
  // }
  
  

  function increment(){
    dispatch({
      type:'increment',
    })
  }
  
  function decrement(){
    dispatch({
      type:'decrement'
    })
  }
  
  function reset(){
    dispatch({
      type:'reset'
    })
  }

  function setTo100(){
    dispatch({
      type:'setTo',
      value:100
    })
  }


  return (
    <>
      <div>Counter</div>
      <div>{count}</div>
      <div className='flex flex-col'>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <button onClick={setTo100}>set count to 100</button>
      
      <button onClick={()=>dispatch({
        type:'setTo',
        value:123
      })}> dispatch in onClick </button>
      </div>
      
    </>
    
    
  )
}

export default Counter