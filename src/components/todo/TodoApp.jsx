import { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useParams,
} from "react-router-dom";
import "./TodoApp.css";
function TodoApp() {
  return (
    <div className="TodoApp">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="*" element={<ErrorComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function LoginComponent() {
  const [username, setUsername] = useState("Username");
  const [password, setPassword] = useState("Password");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();

  function handleUsernameChange(event) {
    //console.log(event.target.value);
    setUsername(event.target.value);
  }

  function handlePasswordChange(event) {
    //console.log(event.target.value);
    setPassword(event.target.value);
  }
  function handleSubmit(event) {
    if (username === "aadam" && password === "dummy") {
      console.log("Successful");
      setShowSuccessMessage(true);
      setShowErrorMessage(false);
      navigate(`/welcome/${username}`);
    } else {
      console.log("Failed");
      setShowSuccessMessage(false);
      setShowErrorMessage(true);
      navigate("/error");
    }
  }

  return (
    <div className="Login">
      <h1>Time to Login</h1>
      {showSuccessMessage && (
        <div className="successMessage">Authentication Successful</div>
      )}
      {showErrorMessage && (
        <div className="errorManage">
          Authentication Failed. Please check your credentials
        </div>
      )}
      <div className="LoginForm">
        <div>
          <label>User Name:</label>
          <input
            type="text"
            name="username"
            placeholder={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            placeholder={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div>
          <button type="button" name="login" onClick={handleSubmit}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

function WelcomeComponent() {
  const { username } = useParams();
  return (
    <div className="WelcomeComponent">
      <h1>Welcome {username}</h1>
      <div>
        Welcome Component <a href="/todos">here</a>
      </div>
    </div>
  );
}
function ErrorComponent() {
  return (
    <div className="ErrorComponent">
      <h1>We are working really hard !</h1>
      <div>Apologies for the 404. Reach out to our team at ABC-DEF-GHIJ</div>
    </div>
  );
}

export default TodoApp;
