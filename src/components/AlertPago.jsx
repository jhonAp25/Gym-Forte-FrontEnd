import React from 'react'

const AlertPago = ({ hidden, openModal , mesSelect }) => {
    return (
        <div className='modal flex justify-center items-center' style={{display : hidden ? ' ' : 'none'}}>
            <div className=' bg-white text_subtitulo font-semibold p-5 flex flex-col items-center' style={{width:'30%' }}>
               <img  className='rounded-full' style={{width: '120px' , height : '120px', objectFit: 'cover',boxShadow: '1px 2px 18px 2px #01182669'}} src="https://i.imgur.com/WyNtovk.png" alt="" />
               <span className='text_normal my-5 font-normal text-xl'> {mesSelect?.mes} restraso - Desea pagar ?  </span>
               <div className='flex w-full justify-between mt-3'>
                    <button className='btn_primary p-2'> SI, Pagar</button>
                    <button className='btn_secondary p-2' onClick={()=> openModal() } > NO, Cancelar</button>
               </div>
              
            </div>
        </div>
    )
}

export default AlertPago
