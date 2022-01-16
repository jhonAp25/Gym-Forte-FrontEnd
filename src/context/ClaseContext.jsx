import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import events from '../util/events';


let ClaseContext = React.createContext();
let {Provider, Consumer} = ClaseContext;

const url = 'https://idat-gym.herokuapp.com/'

const ClaseProvider = ({children}) => {
    
    /********* STATES ************ */
   
    const [evento , setEvento] =useState([])
    const [clase , setClase] =useState([])


    
/************************* P O S T *******************************/ 

    const postClase= async (dat,idDisciplina, dateTime)=>{   
        await axios.post(url +'clase/realizar', {
            cuposmax: dat.cuposMax,
            disciplina: idDisciplina,
            salon: dat.salon,
            trainer: dat.trainer,
            horaFin: dateTime.fechaFin,
            horaIni: dateTime.fechaIni,

        }).then((response)=>{
        
          toast.success('Nueva Clase  Creada! ✔'); 
       
         console.log(response);
         
         
        }).catch((error)=>{
          console.log(error);       
        })
      }


    /********************** G E T -- T R A I N E R   ********************************* */

    
      const getClaseDisciplina=  (id)=>{   
         axios.get(url +'clase/disciplina/' + id).then(({data})=>{      

          setClase(data)
             
           
 
         
         
      
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }



   





    return(
        <Provider value={{clase, evento, setEvento, postClase  , getClaseDisciplina}}>
        {children}
    </Provider>
    )
}



export  {ClaseProvider, Consumer as ClaseConsumer ,ClaseContext};