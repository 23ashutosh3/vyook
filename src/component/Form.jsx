import  { useState, useEffect } from "react"
import '../App.css';
import Todos from './Todos';
function Form() {

	const [todo, setTodo] = useState({title: '', description: ''});
	const [todos, setTodos] = useState([]);
	useEffect(() => {
		if (localStorage.items) {
		  setTodos(JSON.parse(localStorage.getItem("items")));
		} else {
		  setTodos([]);
		}
	  }, []);

	 const handleDelete = (index) => {
		todos.splice(index, 1);
		setTodos([...todos]);
		localStorage.setItem("items", JSON.stringify([...todos]));

	  };

	  const handleSubmit = (e) => {
		e.preventDefault();
		if (todo === "") {
		  return;
		}
		
		let todoObject = {
		  id: todos.length + 1,
		  title:todo.title,
		  description: todo.description,
		  completed: false,
		};
		localStorage.setItem("items", JSON.stringify([...todos, todoObject]));
		setTodos([...todos, todoObject]);
		setTodo("null");
	  };
  return (
      <div >
	  <form onSubmit={handleSubmit} className="form">
        <label htmlFor="title" ></label>
        <input className="title" type="text" id="title" placeholder="Title..." onChange={(e) => setTodo({ ...todo, title: e.target.value })}/>
		<br/>
		<br/>
		<textarea id="Discription" placeholder="Discription..." rows="4" cols="50" onChange={(e) => setTodo({ ...todo, description: e.target.value })}></textarea>
		<br/><br/>
		<button className="button button1">Submit</button>
		</form>
		<Todos 
		 setTodos={setTodos}
		 todos={todos}
		 todo={todo}
		 deleteTask={handleDelete}/>
	  </div>
     
  );
}

export default Form;
