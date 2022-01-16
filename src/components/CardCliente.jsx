import React from 'react'
import {BsPhone} from "react-icons/bs";
import {AiOutlineMail} from "react-icons/ai";

const CardCliente = ({data}) => {
    return (
        <div className=' rounded-xl bg-white p-3 content_card ' style={{width: '253px' , height : '253px', boxShadow: '0px 5px 11px rgb(63 97 135 / 28%)'  }}>
            <div className='flex flex-col justify-center items-center'>
                
               {/** <img src="https://i.imgur.com/pMTKt20.jpg" alt=""  className='rounded-full' style={{width: '120px' , height : '120px'}} />* */}
               {data?.foto === null 
               ? <div  className='rounded-full flex justify-center items-center '  style={{width: '120px' , height : '120px', background:'#011826'}} >
                    <span className='text-white font-semibold text-3xl uppercase'>  {data?.apellido?.charAt(0)}{data?.nombre?.charAt(0)} </span>
                </div>
               :<img src="https://i.imgur.com/pMTKt20.jpg" alt=""  className='rounded-full' style={{width: '120px' , height : '120px'}} />}
               
                <p className='text-lg font-semibold  mt-2 truncate  capitalize' style={{color:'#011826'}} > {data?.apellido}, {data?.nombre} </p>
            </div>
            <div className='flex flex-col mt-4 ' >
                <div className='flex items-center ' style={{color:'#012340', fontSize: '15px'}}  >
                    <BsPhone size={20} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{data?.celular}</span>
                </div> 
                <div className='flex items-center mt-1' style={{color:'#012340', fontSize: '15px'}}  >
                    <AiOutlineMail size={20} className='mr-2'/>
                    <span  style={{color:'rgba(63, 97, 140, 0.7)'}} >{data?.correo}</span>
                </div> 
               
            </div>
        </div>
    )
}

export default CardCliente
