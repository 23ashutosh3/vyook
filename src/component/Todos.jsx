import React from 'react'
import Task from "./Task";

 function Todos({todos,deleteTask}) {
	//const { todos } = props;
	return todos.map((task, index) => ( <
        Task todo = { task.title }
        task={ task.task }
        key = { index }
        index = { index }
        deleteTask = { deleteTask }
        />
    ));
}
export default Todos;