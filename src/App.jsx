import { useState,useEffect } from 'react'
import Task from './Task'
import Counter from './Counter'
import './App.css'


let taskKey = 1

function App() {
  const [tasks, setTasks] = useState([])
  const [input,setInput] = useState({
    key:++taskKey,
    title:'',
    status:false,
  })
  const [flag,setFlag] = useState(false)



  useEffect(()=>{
    const x = tasks.find((task)=>{
      return task.status === false
    })

    if(x){
      setFlag(true)
    }else{
      setFlag(false)
    }
  })

  

  function onInputChange(e){
    setInput({
      key:taskKey++,
      title:e.target.value,
      status:false
    })
  }

  function addNewTask(){
    setFlag(true)
    setTasks([...tasks,input])
    setInput({
      ...input,
      key:taskKey++,
      title:''
    })
  }

  function doneTask(key,status){
    const newTaskList = tasks.map((task)=>{
      if(task.key === key){
        return {
          ...task,
          status:status
        }
      }else{
        return task
      }
    })

    setTasks(newTaskList)
  }

  function editTask(key,title){
    const newTaskList = tasks.map((task)=>{
      if(task.key === key){
        return {
          ...task,
          title:title
        }
      }else{
        return task
      }
    })

    setTasks(newTaskList)  
  }


  function deleteTask(key){
    const newTaskList = tasks.filter(task=>task.key!==key)
   
    setTasks(newTaskList)
  }
  

  function tasksTodo(){
    let count = 0
    tasks.map(task=>{
      if(!task.status){count++}}
      )
    
      return count
  }
  
  return (
    <>
      <h1 className='bg-blue-100 text-3xl py-2'>todo app</h1>
      <div className='my-2  flex flex-col justify-items-center items-center gap-4
                      sm:flex-row'>
        <input className='border-black border w-full h-12 text-xl p-2
                          sm:w-5/6' type="text" placeholder='enter task name' onChange={onInputChange} value={input.title}></input>
        <button className='border-black border w-full h-12 bg-blue-300 hover:bg-blue-500 hover:text-white
                          sm:w-1/6' onClick={addNewTask} disabled={!input.title}>New Task</button>
      </div>
      
      <div className='flex flex-col gap-2
                      lg:flex-row lg:justify-evenly'> 

      <div className="lg:w-1/2 "> 
        <h1 className='text-start'>TASKS TO DO ( {tasksTodo()} ):</h1>
        <div>
          {flag?
          (tasks.map((task)=>{
            if(task.status === false){
              
              return <Task key={task.key} task={task} deleteTask={deleteTask} editTask={editTask} doneTask={doneTask} color={'100'}/>
            }
         
          }))
          :
          <h1 className='text-start'> <i> You have currently no Tasks to do</i></h1> }
          
        </div>
      </div>

      <div className="lg:w-1/2 ">

        <h1 className='text-start'>TASKS DONE:</h1>
        <div>
          {tasks.map((task)=>{
            if(task.status){
              return <Task key={task.key} task={task} deleteTask={()=>deleteTask(task.key)} editTask={editTask} doneTask={doneTask} color={'300'}/>              }
            })}
        </div>

      </div>


     
      </div>
      {!flag && <h1 className='my-20'>Play around with this counter made with useReducer while you have no tasks :-)</h1>}
      {!flag && <Counter/>}
    </>
  )
}

export default App
