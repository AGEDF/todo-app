import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { retrieveHelloWorldBean, retrieveHelloWorldPathVariable } from "./api/HelloWorldApiService";

function WelcomeComponent() {
	const { username } = useParams();

   const[message,setMessage] = useState(null)


	function callHelloWorldRestApi() {

        retrieveHelloWorldBean()
			.then((response) => successfulResponse(response))
			.catch((error) => errorResponse(error))
			.finally(() => console.log("Finally block executed!"));

		retrieveHelloWorldPathVariable('aadam')
			.then((response) => successfulResponse(response))
			.catch((error) => errorResponse(error))
			.finally(() => console.log("Finally block executed!"));
	}

	function successfulResponse(response) {
        setMessage(response.data.message)
		console.log(message);
	}

	function errorResponse(error) {
        setMessage(error.message)
		console.log(message);
	}

   
	return (
		<div className='WelcomeComponent'>
			<h1>Welcome {username}</h1>
			<div>
				Manage your todos - <Link to='/todos'>Go here</Link>
			</div>
			<div>
				<button className='btn btn-success' onClick={callHelloWorldRestApi}>
					Call Hello World Rest Api
				</button>
			</div>
            <div className="text-info">
                {message}
            </div>
		</div>
	);
}

export default WelcomeComponent;
