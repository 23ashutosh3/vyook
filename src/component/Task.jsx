import React from "react";
export default function Task({todo,task,index,deleteTask}) {
  //const { todo} = props;
  //console.log(todo);
  //  console.log(task);
    
    
  return (
    <div className="todoList">
	  <p>{todo}</p>
    <p>{task}</p>
    <button onClick={() => deleteTask(index)}>X</button> 
    {/*<button onClick={()=>handleModal()}>edit</button> */}
     </div>
  );
}
