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
        oneTodo.descripton = todo.description;
      }
      return oneTodo;
    });
    localStorage.setItem("items", JSON.stringify(editedList));
    setTodo(editedList);
    handleEdit();
    console.log(todo, id);
  };

  return (
    <div className="todoList">
      {!edit ?(
        <> <p>{task.title}</p>
    <p>{task.description}</p>
    <button onClick={() => deleteTask(index)}>X</button> 
    <button onClick={handleEdit} >
            Edit
          </button></>): (<>
            {" "}
          <input
            type="text"
            value={todo.title}
            name="todo-title"
            onChange={(e) => setTodo({ ...todo, title: e.target.value })}
          />

         <input
            type="text"
            value={todo.descripton}
            name="todo-descripton"
            onChange={(e) => setTodo({ ...todo, description: e.target.value })}
          />
          <button onClick={handleEdit}>Cancel</button>
          <button type="submit" onClick={() => handleEditSubmit(task.id)}>
            Save
          </button>
          </>)
         }
	 
     </div>
  );
}
