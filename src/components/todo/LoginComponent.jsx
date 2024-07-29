import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from './security/AuthContext'

function LoginComponent() {

    const [username, setUsername] = useState('in28minutes')

    const [password, setPassword] = useState('')

    //const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    function handleSubmit() {
        if(authContext.login(username,password)){
            console.log('Success')
            navigate(`/welcome/${username}`)
        } else {
            console.log('Failed')
            setShowErrorMessage(true)
        }
    }

    return (
        <div className="Login">
            <h1>Time to Login!</h1>
            {showErrorMessage && <div className="errorMessage">Authentication Failed. 
                                                            Please check your credentials.</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" placeholder="Username" onChange={handleUsernameChange}/>
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Password" onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent;