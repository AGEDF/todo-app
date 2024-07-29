import { useEffect, useState } from "react";
import { retrieveAllTodosForUser, deleteTodo } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

function ListTodosComponent() {
	//  const today = new Date()

	// const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay())

	// const todos = [
	//                 {id: 1, description: 'Learn AWS', done: false, targetDate:targetDate},
	//                 {id: 2, description: 'Learn Full Stack Dev', done: false, targetDate:targetDate},
	//                 {id: 3, description: 'Learn DevOps', done: false, targetDate:targetDate},
	//             ]

	const [todos, setTodos] = useState([]);

	const [message, setMessage] = useState("");

	const authContext = useAuth()

	const username = authContext.username

	useEffect(() => refreshTodos());

	function refreshTodos() {
		retrieveAllTodosForUser(username)
			.then((response) => {
				console.log(response);
				setTodos(response.data);
			})
			.catch((error) => console.log(error))
			.finally(() => console.log("Finally block executed!"));
	}

	function deleteTodos(id) {
		deleteTodo(username, id)
			.then((response) => {
				setMessage(`Delete of todo ${id} successful`);
				refreshTodos();
			})
			.catch((error) => console.log(error));
	}

	function updateTodos(id) {
		deleteTodo(username, id)
			.then((response) => {
				setMessage(`Delete of todo ${id} successful`);
				refreshTodos();
			})
			.catch((error) => console.log(error));
	}

	return (
		<div className='container'>
			<h1>Things You Want To Do!</h1>
			{message && <div className='alert alert-success'>{message}</div>}
			<div>
				<table className='table'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Description</th>
							<th>Is Done?</th>
							<th>Target Date</th>
							<th>Delete</th>
							<th>Update</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<tr key={todo.id}>
								<td>{todo.id}</td>
								<td>{todo.description}</td>
								<td>{todo.done.toString()}</td>
								<td>{todo.targetDate.toString()}</td>
								<td>
									<button
										className='btn btn-danger'
										onClick={() => deleteTodos(todo.id)}
									>
										Delete
									</button>
								</td>
								<td>
									<button
										className='btn btn-warning'
										onClick={() => updateTodos(todo.id)}
									>
										Update
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default ListTodosComponent;
