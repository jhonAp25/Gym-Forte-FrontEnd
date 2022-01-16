import React from 'react'
import { MdMoreHoriz } from "react-icons/md";


const DetalleDashboard = () => {
    return (
        <div className='h-screen ' style={{width: '25%'}}  >

            <div className='flex p-5 justify-between'>
                <div className=''>
                    <img className='w-16 h-16 object-cover rounded-full mx-auto'src='https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80' />
                </div>

                <div className='flex flex-col justify-around' style={{marginLeft: '-7%'}} >
                    <span className='font-semibold'>Darlene Robertson</span>
                    <span className='font-semibold text-gray-400 text-sm'>Administrador</span>
                </div>

                <div className='flex justify-center items-center' >
                    <span className='hover:bg-gray-200 cursor-pointer p-1 rounded-full'>
                        <MdMoreHoriz size={25}  />
                    </span>
                    
                </div>
               



            </div>
            <hr className='w-full bg-gray-300' />


            <div>
                
            </div>
 
        </div>
    )
}

export default DetalleDashboard
