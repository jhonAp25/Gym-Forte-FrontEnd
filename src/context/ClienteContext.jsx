import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


let ClienteContext = React.createContext();
let {Provider, Consumer} = ClienteContext;

const url = 'https://idat-gym.herokuapp.com/'

const ClienteProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ cliente , setCliente] = useState([])
    const [ idCliente , setIdCliente]=useState(0)


    
/************************* P O S T *******************************/ 

    const postCliente = async (dat)=>{   
        await axios.post(url +'cliente', {
            nombre: dat.nombre,
            apellido: dat.apellido,
            celular: dat.celular,
            correo: dat.correo,
            sexo: dat.sexo ,
            dni : dat.dni,
            foto: null
          
          
        }).then((response)=>{
        
          getCliente()
          alert(response.data.id)
          setIdCliente(response.data.id)
          toast.success('Cliente nuevo '+ response.data.nombre+' agregado ✔'); 

        }).catch((error)=> console.log(error))
      }


    

    /********************** G E T -- C L I E N T E  ********************************* */

      const getCliente= async ()=>{   
        await axios.get(url +'cliente').then(({data})=>{
            setCliente(data);

        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }


      const getClienteBusqueda= async (dato)=>{   
        await axios.get(url +'cliente/buscar?dato='+ dato).then(({data})=>{
          setCliente(data);
         
        }).catch((error)=>{
          toast.error('No se encontro ningun CLIENTE')
          console.log(error.response);
          
        })
      }

   




    useEffect(() => {
    
    
    
    }, [ ])


    return(
        <Provider value={{getCliente, cliente,idCliente, postCliente, getClienteBusqueda}}>
        {children}
    </Provider>
    )
}



export  {ClienteProvider, Consumer as ClienteConsumer ,ClienteContext};