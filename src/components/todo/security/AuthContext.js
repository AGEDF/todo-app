import { createContext, useContext, useState } from "react";

//1: Creating a Context
export const AuthContext = createContext();

//2: Creating a Provider
export const useAuth = () => useContext(AuthContext);

//3: Share created context with other components
export default function AuthProvider({ children }) {

	const [isAuthenticated, setAuthenticated] = useState(false);

    const[username, setUsername] = useState(null)

    function login(username,password)
    {
        if(username==='aadam' && password==='dummy'){
            setAuthenticated(true)
            setUsername(username)
            return true;
        } else {
            setAuthenticated(false)
            setUsername(null)
            return false;
        }
    }
    
    function logout(){
        setAuthenticated(false)    
    }

	return (
		<AuthContext.Provider value={ {isAuthenticated,login,logout,username }}>
			{children}
		</AuthContext.Provider>
	);
}
