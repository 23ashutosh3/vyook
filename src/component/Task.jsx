import React, { useState } from "react";
export default function Task({task,index,deleteTask,todos}) {
    
  const [edit, setEdit] = useState(false);
  const [todo, setTodo] = useState({title:task.title,description:task.description});

  const handleEdit = () => {
    setEdit(!edit);
  };

  const handleEditSubmit = (id) => {
    const editedList = todos.map((oneTodo) => {
      if (oneTodo.id === id) {
        console.log(id);
        oneTodo.title = todo.title;
        oneTodo.description = todo.description;
      }
      return oneTodo;
    });
    localStorage.setItem("items", JSON.stringify(editedList));
    setTodo(editedList);
    handleEdit();
    console.log(todo, id);
    console.log(editedList);

  };

  return (
    <div className="todoList">
      {!edit ?(

        <> 
        <div className="heading">
          <div className="first">
          <h4 >{task.title}</h4>
        <h6>{task.description}</h6>
          </div>
          <div className="second">
          <button class="buttonx" onClick={() => deleteTask(index)}>X</button> 
        <button class="buttonx" onClick={handleEdit} >Edit
          </button>
          </div>
       
      
   
            
          </div></>): (<>
            {" "}
            <div className="heading">  
            <div className="first">
            <input  type="text" value={todo.title} name="todo-title"  onChange={(e) => setTodo({ ...todo, title: e.target.value })} />
            <input type="text" value={todo.description} name="todo-description" onChange={(e) => setTodo({ ...todo, description: e.target.value })}/>
            </div>
            <div className="second">
            <button class="buttonx" onClick={handleEdit}>Cancel</button>
            <button class="buttonx" type="submit" onClick={() => handleEditSubmit(task.id)}> Save</button>
            </div>
            </div>
          </>)
         }
	 
     </div>
  );
}
