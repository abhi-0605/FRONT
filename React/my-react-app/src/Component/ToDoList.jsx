import React from 'react'
import { useState } from 'react'


function ToDoList() {

    const [Tasks, setTask] = useState(["eat food", "take a shower", "play game"]);
    const [newTask, setnewTask] = useState("");

    function hadleInputChange(event) {
        setnewTask(event.target.value)
    }

    function AddTask() {

        if (newTask.trim() !== "") {
            setTask(T => [...T, newTask])
            setnewTask("");
        }

    }

    function DeleteTask(index) {
        const updatedTask=Tasks.filter((_,i)=> i!==index)
        setTask(updatedTask);
    }

    function MoveTaskUp(index) {
        if(index>0){
            const updatedTask=[...Tasks];
            [updatedTask[index],updatedTask[index-1]]=[updatedTask[index-1],updatedTask[index]];
            setTask(updatedTask)
        }
    }

    function MoveTaskDown(index) {
        if(index<Tasks.length-1){
            const updatedTask=[...Tasks];
            [updatedTask[index],updatedTask[index+1]]=[updatedTask[index+1],updatedTask[index]];
            setTask(updatedTask)
        }
    }
    return (
        <div className='to-do-list'>
            <h1>To-Do-List</h1>

            <div>
                <input type='text' placeholder='Enter a Task' value={newTask} onChange={hadleInputChange} ></input>
                <button className='add-btn' onClick={AddTask}>Add Task</button>
            </div>

            <ol>
                {Tasks.map((task, index) =>
                    <li key={index} >
                        <span className='text'>{task}</span>
                        <button className='del-btn' onClick={() => DeleteTask(index)}>Delete</button>
                        <button className='move-btn' onClick={() => MoveTaskUp(index)}>Move Up</button>
                        <button className='move-btn' onClick={() => MoveTaskDown(index)}>Move Down</button>
                    </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList
