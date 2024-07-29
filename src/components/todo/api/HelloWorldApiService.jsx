import axios from "axios"

// export function retrieveHelloWorldBean(){
//     return axios.get('http://localhost:8080/hello-world/path-variable/aadam')
// }


//To stop repeating localhost:8080 part again

 const axiosClient= axios.create({
    baseURL: 'http://localhost:8080'
})


export const retrieveHelloWorldBean = () => 
    axiosClient.get('/hello-world-bean')

export const retrieveHelloWorldPathVariable = (username) => 
    axiosClient.get(`/hello-world/path-variable/${username}`)
