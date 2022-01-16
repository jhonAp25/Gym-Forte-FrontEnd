import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";


let TrainerContext = React.createContext();
let {Provider, Consumer} = TrainerContext;

const url = 'https://idat-gym.herokuapp.com/'

const TrainerProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ trainer , setTrainer] = useState([])


    
/************************* P O S T *******************************/ 

    const postTrainer= async (dat, imgUrl)=>{   
        await axios.post(url +'trainer', {
          altura: dat.altura,
          apellido: dat.apellido,
          descripcion: dat.descripcion,
          dni: dat.dni,
          fechaNac: dat.fechaNac,
          foto: imgUrl,
          genero: dat.genero,
          nombre: dat.nombre,
          peso: dat.peso,
          telefono: dat.telefono,
          disciplinas:{id : dat.disciplina} 
        }).then((response)=>{
        
          toast.success('Trainer nuevo Creado! ✔'); 
          getTrainer()
         console.log(response);
         
         
        }).catch((error)=>{
          
        
          console.log(error);
          
        })
      }


      
      const putTrainer=  (dat, dataTrainer)=>{   
         axios.put(url +'trainer/update', {
             altura: dat.altura,
             descripcion: dat.descripcion,
             disciplinas: dataTrainer.disciplinas.id,
             foto: dataTrainer.foto,
             genero: dataTrainer.genero,
             id: dataTrainer.id,
             peso: dat.peso,
             telefono: dat.telefono
               
        }).then((response)=>{
          console.log(response);
          getTrainer()
          toast.success('Trainer Actualizado! ✔'); 
        }).catch((error)=>{
          toast.error('Trainer Actualizado! ✔'); 
          console.log(error.response.data);
          
        })
      }


      const actualizarCliente = async(data)=>{ await axios.put(url + 'cliente/update' , data
    
      ).then((response)=> console.log('EXITO al actualizar')
      ).catch(error=> console.log(error) )}
  

    /********************** G E T -- T R A I N E R   ********************************* */

      const getTrainer= async ()=>{   
        await axios.get(url +'trainer').then(({data})=>{
          setTrainer(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

      const getTrainerBusqueda= async (dato)=>{   
        await axios.get(url +'trainer/buscar?dato='+ dato).then(({data})=>{
          setTrainer(data);
          console.log(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

   





    return(
        <Provider value={{trainer, getTrainer,getTrainerBusqueda , postTrainer, putTrainer}}>
        {children}
    </Provider>
    )
}



export  {TrainerProvider, Consumer as TrainerConsumer ,TrainerContext};