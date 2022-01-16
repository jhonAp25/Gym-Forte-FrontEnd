import React, { useState } from 'react'
import CardCliente from '../components/CardCliente'
import {FiSearch} from "react-icons/fi";
import FormularioCliente from '../components/FormularioCliente';
import { ClienteContext } from '../context/ClienteContext';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useToasterStore } from 'react-hot-toast';
import DetalleCliente from '../components/DetalleCliente';
import { PlanPagoContext } from '../context/PlanPagoContext';


const ClientePage = () => {
    const {getCliente, cliente,getClienteBusqueda}=useContext(ClienteContext)
    const {getMatriculaId} =useContext(PlanPagoContext)

    const [hidden , setHidden] = useState(false)
    const [clienteData , setClienteData] = useState([])
    const [detalle, setDetalle] =useState(false)


    const openModal =()=>{ setHidden(!hidden) }

    const selectCliente=(id)=>{
        getMatriculaId(id)

        setDetalle(true)

        
    }

    
    const filtroCliente=(e)=>{
        getClienteBusqueda(e.target.value)
    }

       
 

    useEffect(() => {
       getCliente()
    }, [])

    return (
        <div className='flex flex-col  px-20 pt-10  h-full  bg-gray-100' >
            
            <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>CLIENTE</h2>
            

            <div className='w-full flex mt-10'>
                <div className='w-full  rounded-full border flex items-center bg-white focus:ring-2   border border-gray-400  'style={{width: '40%'}}  >
                    <input type="text" onChange={(e)=>filtroCliente(e) }  className='w-full p-2 rounded-full  focus:outline-none'  />  <FiSearch size={20} color='#011826' className='mr-3' />
                
                </div>
                <button className='btn_primary px-5 ml-4' onClick={()=>openModal()} > Agregar </button>
                <FormularioCliente  openModal={openModal}    hidden={hidden}   />
            </div>

            
        {!detalle
        ?
        <div className=' grid grid-cols-4 gap-4 overflow-y-auto mt-4 py-3' style={{maxHeight: '37rem'}} >
        {cliente.map(c=>(
            <div className='' key={c.id} onClick={()=>selectCliente(c.id)}>
                 <CardCliente data={c} />
            </div>
            
        ))}
        
        </div>

        :

        <DetalleCliente clienteData={clienteData} setDetalle={setDetalle} />
     
        }


            



          
        </div>
    )
}

export default ClientePage
