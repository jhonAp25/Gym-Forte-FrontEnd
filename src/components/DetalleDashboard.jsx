import React,{useState} from 'react'
import { MdMoreHoriz } from "react-icons/md";

import {AiOutlineLogin} from "react-icons/ai";



const DetalleDashboard = () => {

    const [opciones ,setOpciones]=useState(false)

    const cerrarSesion=()=>{
        localStorage.clear("usuario")
        localStorage.clear("rol")
        localStorage.clear("nombreUsuario")
        localStorage.clear("id")
        localStorage.clear("img")

        window.location = '/'

    }
    return (
        <div className='h-screen ' style={{width: '25%'}}  >

            <div className='flex p-5 justify-between'>
                <div className='mr-3'>
                    <img className='w-16 h-16 object-cover rounded-full mx-auto'src='https://i.imgur.com/IKNorjn.jpg' />
                </div>

                <div className='flex flex-col justify-around' style={{marginLeft: '-7%'}} >
                    <span className='font-semibold'>Jhon Elvis Apaza Larico</span>
                    <span className='font-semibold text-gray-400 text-sm'>Administrador</span>
                </div>

                <div className='flex justify-center items-center' >
                    <span className='hover:bg-gray-200 cursor-pointer p-1 rounded-full '  onClick={()=>{setOpciones(!opciones)}}>
                        <MdMoreHoriz size={25}  />
                    </span>
                    {opciones ? 
                 <div className='absolute bg-white p-2 border card_session ' style={{top : '4rem' , right : '3rem'}} >
                 <ul>
                     <li className='cursor-pointer btn_sesion p-2 text-gray-800 flex flex-row justify-evenly items-center space-x-2 'onClick={cerrarSesion}  > <AiOutlineLogin/><p>Cerrar Sesion</p> </li>
                    
                 </ul>
              </div>:
              ""
                }
                    
                </div>
               



            </div>
            <hr className='w-full bg-gray-300' />


            <div>
                
            </div>
 
        </div>
    )
}

export default DetalleDashboard
