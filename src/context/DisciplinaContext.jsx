import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


let DisciplinaContext = React.createContext();
let {Provider, Consumer} = DisciplinaContext;

const url = 'https://idat-gym.herokuapp.com/'

const DisciplinaProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ disciplina , setDisciplina] = useState([])


    
/************************* P O S T *******************************/ 

    const postDisciplina= async (dat, imgurl)=>{   
        await axios.post(url +'disciplina', {
            nombre: dat.nombre,
            descripcion: dat.descripcion,
            imagen: imgurl
        }).then((response)=>{
        
          getDisciplina()
          toast.success('La disciplina '+ response.data.nombre+' se a creado ✔'); 

        }).catch((error)=> console.log(error))
      }


      const putDisciplina= async (id, dat, imgurl)=>{   
        await axios.put(url +'disciplina', {
            id: id,
            nombre: dat.nombre,
            descripcion: dat.descripcion,
            imagen: imgurl
        }).then((response)=>{
        
          getDisciplina()
          toast.success('La disciplina '+ response.data.nombre+' actualizada ✔'); 

        }).catch((error)=> console.log(error))
      }
      /*
      const postUsuario= async (dat)=>{   
        await axios.post(url +'usuario/registrar/userCliente', {
            cliente: {id: idCliente },
            contrasena: dat.contrasena,
            usuario: dat.nombreUsu
               
        }).then((response)=>{
          console.log(response);
          
        }).catch((error)=>{
          
          console.log(error.response.data);
          
        })
      }


      const actualizarCliente = async(data)=>{ await axios.put(url + 'cliente/update' , data
    
      ).then((response)=> console.log('EXITO al actualizar')
      ).catch(error=> console.log(error) )}
 


      const postSalon= async (dat)=>{   
        await axios.post(url +'disciplina', {
            capacidad: dat.ca,
            descripcion: dat.descripcion,
        }).then((response)=>{
        
         
          //toast.success('La disciplina '+ response.data.nombre+' se a creado ✔'); 

        }).catch((error)=> console.log(error))
      } 
 */

    /********************** G E T -- C L I E N T E  ********************************* */

      const getDisciplina= async ()=>{   
        await axios.get(url +'disciplina').then(({data})=>{
          setDisciplina(data);

        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

   




useEffect(() => {
  
 
  
}, [ ])


    return(
        <Provider value={{getDisciplina, disciplina, postDisciplina, putDisciplina}}>
        {children}
    </Provider>
    )
}



export  {DisciplinaProvider, Consumer as DisciplinaConsumer ,DisciplinaContext};