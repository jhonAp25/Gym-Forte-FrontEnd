import React from 'react'
import { date } from 'yup'

const CardTrainer = ({data, openModalUpdat}) => {
    return (
        <div className='border  rounded-lg flex flex-col mt-5 cursor-pointer shadow-xl  ' onClick={()=>openModalUpdat(data)} style={{width : 280}} >
            <div  className='h-3/4 relative ' style={{zIndex: '100'}} >
                <img className=' object-cover rounded-t-lg  ' style={{minWidth: 278, maxHeight: 230}}  src={data.foto} alt="perfil trainer" width={278} height={230} />
                <div className='absolute bottom-2 left-2  pl-2 pr-2 rounded-full bg-gray-200'  ><span className='text-gray-700 text-sm font-bold'>{data?.disciplinas?.nombre}</span></div>
            </div>

            <div className='flex p-2 flex-col h-full' >
                <p className='w-full font-bold text-lg capitalize truncate '>{data.nombre}, {data.apellido}</p>

                <div className='flex w-full justify-between mt-2'>
                    <div>   
                        <span className='font-bold text-gray-700' >Edad</span>
                        <p className='font-semibold text-gray-400 '>{new Date().getFullYear()  - new Date(data.fechaNac).getFullYear()   }</p>
                    </div>

                    <div>
                        <span className='font-bold text-gray-700'>Talla</span>
                        <p className='font-semibold text-gray-400 '>{data.altura}</p>
                    </div>

                    <div>
                        <span className='font-bold text-gray-700'>Peso</span>
                        <p className='font-semibold text-gray-400 '>{data.peso}</p>
                    </div>

                    <div>
                        <span className='font-bold text-gray-700'>Genero</span>
                        <p className='font-semibold text-gray-400 ' >{data.genero}</p>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default CardTrainer
