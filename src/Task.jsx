import { useState,useRef } from "react";
import {flushSync} from 'react-dom'

export default function Task({task,deleteTask,editTask,doneTask,color }){

    const [isEditing,setIsEditing] = useState(false)
    const [editInput,setEditInput] = useState({...task})
    const focusRef = useRef(null)
    
    const classN = `flex gap-x-2 justify-evenly bg-blue-${color} py-4 px-2 my-2`

    function onEditInput(e){
        setEditInput({
            ...editInput,
            title:e.target.value})
    }

    function handleSave(){
        editTask(task.key,editInput.title)
        setIsEditing(false)
    }

    function handleDone(e){
        doneTask(task.key,!task.status)
        
    }
    
    // "flex gap-x-2 justify-evenly bg-blue-${100} py-4 px-2 my-2"
    return (
        <div className={classN} >
            <input type="checkbox" name="" id="" checked={task.status} onChange={handleDone}/>
            {isEditing?
            (
            <> 
            <input ref={focusRef} className="border border-black w-80" onChange={onEditInput} value={editInput.title} ></input>
            <button className="border-black border bg-green-300" onClick={handleSave}>save</button>
            </>    

            )
            :
            <>
            <span className="w-80 text-start">{task.title}</span><span>{task.key}</span>
            <button  className="border-black border bg-yellow-300" onClick={()=>{
                flushSync(()=>{
                    setIsEditing(true)
                    editTask()
                })
                
                focusRef.current.focus()
                }} >edit</button>
            </>
            }
            
            
            <button className="border-black border bg-red-500 text-white" onClick={()=>deleteTask(task.key)}>delete</button>
        </div>
    )
}
