import React,{useEffect , useState} from 'react'

import axios from 'axios';
import toast, { Toaster } from "react-hot-toast";




let PlanPagoContext = React.createContext();
let {Provider, Consumer} = PlanPagoContext;

const url = 'https://idat-gym.herokuapp.com/'

const PlanPagoProvider = ({children}) => {
    
    /********* STATES ************ */
    const [ plan , setPlan] = useState([])
    const [pago , setPago]=useState([])
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

/********************- RESERVA******************************** */
    const postReserva=(plan,cliente)=>{
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


    const getReservaId=(id)=>{
        axios.get(url + 'reserva/buscarReservaByCliente/'+ id ).then((response) =>{
            setClienteMatricula(response.data);
            console.log(response);
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
/***********************PAGO********************** */

      const getPagoCliente=(id)=>{
          axios.get(url + 'pago/' + id).then(({data})=>{
              setPago(data)
             

          }).catch((error)=> console.log(error.response))
      }
   

      const postPagoCliente=(pago)=>{
        axios.put(url + 'pago/' + pago.id).then(({data})=>{
            
            console.log(data);
            getPagoCliente(pago.reserva.cliente.id)
          //  toast.success(data)
        }).catch((error)=> console.log(error))
    }


    useEffect(() => {
    
    
    
    }, [ ])


    return(
        <Provider value={{getPlan, plan,pago ,clienteMatricula, postPlan, postReserva, getPagoCliente,getReservaId,postPagoCliente}}>
        {children}
    </Provider>
    )
}



export  {PlanPagoProvider, Consumer as PlanPagoConsumer ,PlanPagoContext};