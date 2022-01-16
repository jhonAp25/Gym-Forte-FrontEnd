import React,{useState} from 'react'
import { AiFillCaretLeft,AiOutlineMail,AiOutlineQq } from "react-icons/ai";
import {BsPhone, BsCalendarWeek} from "react-icons/bs";
import { BiUserPin } from "react-icons/bi";
import { useContext } from 'react';
import { PlanPagoContext } from '../context/PlanPagoContext';
import { useEffect } from 'react';
import AlertPago from './AlertPago';


const DetalleCliente = ({clienteData, setDetalle}) => {

    const {getMensualidad,mensualidad, clienteMatricula} =useContext(PlanPagoContext)
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
        getMensualidad()
    }, [])

    return (
        <div className=' grid grid-cols-2 gap-4 overflow-y-auto mt-4 py-3'  >
            <div className='flex col-span-full'>
                <button className='btn_primary p-2' onClick={()=>backPage() } > <AiFillCaretLeft/> </button>
                <span className='text_normal font-semibold text-2xl ml-5'>{clienteMatricula[0]?.cliente?.apellido}, {clienteMatricula[0]?.cliente?.nombre}</span>
            </div>

           

            <div className='mt-5 p-5' style={{border: '2px dashed #011826e5'}}>
               

                {clienteMatricula[0]?.cliente?.foto === null 
               ? <div  className='rounded-full flex justify-center items-center m-auto '  style={{width: '180px' , height : '180px', background:'#011826'}} >
                    <span className='text-white font-semibold text-4xl uppercase'>  {clienteMatricula[0]?.cliente?.apellido?.charAt(0)}{clienteMatricula[0]?.cliente?.nombre?.charAt(0)} </span>
                </div>
               :<img src="https://i.imgur.com/pMTKt20.jpg" alt=""  className='rounded-full' style={{width: '180px' , height : '180px'}} />}


                <div className='flex items-center mt-5' style={{color:'#012340', fontSize: '18px'}}  >
                    <BsPhone size={20} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{clienteMatricula[0]?.cliente?.celular}</span>
                </div> 

                <div className='flex items-center mt-2' style={{color:'#012340', fontSize: '18px'}}  >
                    <AiOutlineMail size={20} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{clienteMatricula[0]?.cliente?.correo}</span>
                </div> 

                <div className='flex items-center mt-2' style={{color:'#012340', fontSize: '18px'}}  >
                    <BiUserPin size={20} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >75682247</span>
                </div> 

                <div className='flex items-center mt-2' style={{color:'#012340', fontSize: '18px'}}  >
                    <AiOutlineQq size={20} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{clienteMatricula[0]?.cliente?.sexo}</span>
                </div> 
            </div>

            <div className='mt-5 p-5 bg-white overflow-y-scroll' style={{maxHeight: '27rem'}}>
            <AlertPago  hidden={hidden} openModal={openModal} mesSelect={mesSelect} />
                <span> {clienteMatricula[0].planpago?.nombre} -  S/. {clienteMatricula[0].planpago?.costo} </span>
                    {mensualidad.map(m=>(
                        <div className='flex justify-between items-center w-full p-2 my-1 cursor-pointer hover:bg-gray-100' onClick={()=>Pago(m)} style={{border: '2px solid #011826'}}>
                            <div className='flex items-center text_normal'>
                              <BsCalendarWeek/>   <span className='font-semibold ml-3 uppercase' > {m.mes}</span>
                            </div>
                            

                            <span className='bg-red-400 p-1 rounded text-white'>Pendiente</span>
                        </div>
                    ))}
            </div>
            
        </div>  
    )
}

export default DetalleCliente
