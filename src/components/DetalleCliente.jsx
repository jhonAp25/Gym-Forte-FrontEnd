import React,{useState} from 'react'
import { AiFillCaretLeft,AiOutlineMail,AiOutlineQq } from "react-icons/ai";
import {BsPhone, BsCalendarWeek} from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { useContext } from 'react';
import { PlanPagoContext } from '../context/PlanPagoContext';
import { useEffect } from 'react';
import AlertPago from './AlertPago';


const DetalleCliente = ({clienteData, setDetalle}) => {

    const {getPagoCliente,pago, clienteMatricula} =useContext(PlanPagoContext)
    const [mesSelect , setMesSelect]=useState([])

    const [hidden , setHidden] = useState(false)

    const backPage=()=>{
        setDetalle(false)
    }
    const openModal =()=>{ setHidden(!hidden) }


    const Pago=(data)=>{
        openModal()
       
        setMesSelect(data)

    }

    useEffect(() => {
       
    }, [])

    return (
        <div className=' grid grid-cols-2 gap-10 overflow-y-auto mt-4 py-3' style={{height : '70%'}} >
            

           

            <div className='mt-5 p-5 card_detalle_cliente' >
               <div className='btn_exit' onClick={()=>backPage() }></div>

                {clienteMatricula?.cliente?.foto === null 
               ? <div  className='rounded-full flex justify-center items-center m-auto '  style={{width: '180px' , height : '180px', background:'#011826'}} >
                    <span className='text-white font-semibold text-6xl uppercase'>  {clienteMatricula?.cliente?.apellido?.charAt(0)}{clienteMatricula?.cliente?.nombre?.charAt(0)} </span>
                </div>
               :<img src="https://i.imgur.com/pMTKt20.jpg" alt=""  className='rounded-full' style={{width: '180px' , height : '180px'}} />}


                <div className='flex items-center mt-5' style={{color:'#012340', fontSize: '18px'}}  >
                    <BsPhone size={23} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{clienteMatricula?.cliente?.celular}</span>
                </div> 

                <div className='flex items-center mt-2' style={{color:'#012340', fontSize: '18px'}}  >
                    <AiOutlineMail size={23} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{clienteMatricula?.cliente?.correo}</span>
                </div> 

                <div className='flex items-center mt-2' style={{color:'#012340', fontSize: '18px'}}  >
                    <BiUserPin size={23} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{clienteMatricula?.cliente?.dni}</span>
                </div> 

                <div className='flex items-center mt-2' style={{color:'#012340', fontSize: '18px'}}  >
                    <AiOutlineQq size={23} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{clienteMatricula?.cliente?.sexo}</span>
                </div> 
            </div>

            <div className='mt-5 p-5 bg-white overflow-y-scroll' style={{maxHeight: '30rem'}}>
                <AlertPago  hidden={hidden} openModal={openModal} pago={mesSelect} />
                <span className='text-2xl font-semibold text_normal'> {clienteMatricula?.planpago?.nombre} -  S/.{clienteMatricula?.planpago?.costo} </span>
                    {pago.map(m=>(
                        <div className='flex justify-between items-center w-full p-2 my-1 cursor-pointer hover:bg-gray-100' onClick={()=>Pago(m)} style={m?.estado === "Pagado" ? {border: '2px solid #17A589'} : {border: '2px solid #A93226'} }>
                            <div className='flex items-center text_normal'>
                              <BsCalendarWeek/>   <span className='font-semibold ml-3 uppercase' > {m?.mensualidad?.mes}</span>
                            </div>
                            

                            <span className=' p-1 rounded font-semibold' style={{color : '#011826'}} >{m?.estado}</span>
                        </div>
                    ))}
            </div>
                        
        </div>  
    )
}

export default DetalleCliente
