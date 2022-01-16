import React,{useContext , useState} from 'react'

import axios from 'axios';
import toast from "react-hot-toast";



let LoginContext = React.createContext();
let {Provider, Consumer} = LoginContext;

const url = 'https://idat-gym.herokuapp.com'

const LoginProvider = ({children}) => {
    
    //********* */ STATES ************
    const [ usuario , setUsuario] = useState([])
    const [error , setError]=useState("")

    
    //************* */ URL ************
  


    const signIn = async(user)=>{ await axios.post(url +'/usuario/login' , user)
            .then((response)=>{ 
               
                setUsuario(response.data) 
                localStorage.setItem("nombreUsuario" , user.usuario)
                console.log(user.usuario);
                if (response.data.Usuario.rol.tipoRol === "ADMIN"){
                    localStorage.setItem("usuario",response.data.Usuario.administrador.nombre);
                    localStorage.setItem("rol",response.data.Usuario.rol.tipoRol);
                    localStorage.setItem('img' , '')
                    window.location = '/inicio'
                }else {
                    
                    window.location = '/'
                }

                console.log(response.data)
               
                })
            .catch((error) => { 
                console.log(error.response.data);

                toast.error('Intente de nuevo ❌'); 
              
            })}

   // const nuevoUsu = async()=>{ await axios.post(url +'/nuevo').then((response)=>{ setUsuario(response.data); }) }




    return(
        <Provider value={{signIn  ,error ,setError }}>
        {children}
    </Provider>
    )
}



export  {LoginProvider, Consumer as LoginConsumer , LoginContext};  