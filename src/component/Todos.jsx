import React from 'react'
import Task from "./Task";

 function Todos({todos,deleteTask}) {
	//const { todos } = props;
	return todos.map((task, index) => ( <
        Task task = { task}
        key = { index }
        index = { index }
        todos={todos}
        deleteTask = { deleteTask }
        />
    ));
}
export default Todos;