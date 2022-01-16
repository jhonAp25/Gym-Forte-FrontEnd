import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";
import events from '../util/events';


let SalonContext = React.createContext();
let {Provider, Consumer} = SalonContext;

const url = 'https://idat-gym.herokuapp.com/'

const SalonProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ salon , setSalon] = useState([])
  //  const [evento , setEvento] =useState([])


    
/************************* P O S T *******************************/ 

  /*  const postClase= async (dat,idDisciplina, dateTime)=>{   
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
*/

    /********************** G E T -- S A L O N  ********************************* */

      const getSalon= async ()=>{   
        await axios.get(url +'salon').then(({data})=>{
          setSalon(data);
        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }

     


   





    return(
        <Provider value={{salon, getSalon}}>
        {children}
    </Provider>
    )
}



export  {SalonProvider, Consumer as SalonConsumer ,SalonContext};