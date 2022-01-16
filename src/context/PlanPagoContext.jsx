import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";




let PlanPagoContext = React.createContext();
let {Provider, Consumer} = PlanPagoContext;

const url = 'https://idat-gym.herokuapp.com/'

const PlanPagoProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ plan , setPlan] = useState([])
    const [mensualidad , setMensualidad]=useState([])
    const [clienteMatricula , setClienteMatricula] = useState([])


    
/************************* P O S T *******************************/ 

    const postPlan =  (dat)=>{   
         axios.post(url +'planpago/registrar', {
            nombre: dat.nombre,
            disciplinas: dat.disciplinas,
            costo: dat.costo,
            finn: dat.fin,
            inicio: dat.inicio ,
            estado: true
 
        }).then((response)=>{
        
          getPlan()
          toast.success('Nuevo Plan '+ response.data.nombre+' agregado ✔'); 
          console.log(response);

        }).catch((error)=> {
            console.log(error);
              toast.error('Error en el servidor ✔') })
      }

/********************MATRICULA - RESERVA******************************** */
    const postMatricula=(plan,cliente)=>{
        axios.post(url + 'reserva' , {
            cliente: cliente,
            estado: true,
            fecha: new Date( Date.now()),
            planpago: plan
        }).then((response) =>{
            console.log(response.data);
            toast.success('Cliente matriculadooo ✔'); 
        }).catch((error)=>{
            console.log(error);
        })
    }


    const getMatriculaId=(id)=>{
        axios.get(url + 'reserva/buscarReservaBy/'+ id ).then((response) =>{
            setClienteMatricula(response.data);
            console.log(response.data);
        }).catch((error)=>{
            console.log(error);
        })
    }




    

    /********************** G E T -- C L I E N T E  ********************************* */

      const getPlan= async ()=>{   
        await axios.get(url +'planpago').then(({data})=>{
            setPlan(data);

        }).catch((error)=>{
        
          console.log(error.response);
          
        })
      }


      const getMensualidad=()=>{
          axios.get(url + 'mensualidad').then(({data})=>{
              setMensualidad(data)

          }).catch((error)=> console.log(error.response))
      }
   




    useEffect(() => {
    
    
    
    }, [ ])


    return(
        <Provider value={{getPlan, plan,mensualidad ,clienteMatricula, postPlan, postMatricula, getMensualidad,getMatriculaId}}>
        {children}
    </Provider>
    )
}



export  {PlanPagoProvider, Consumer as PlanPagoConsumer ,PlanPagoContext};