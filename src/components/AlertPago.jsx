import React, { useContext } from 'react'
import { PlanPagoContext } from '../context/PlanPagoContext'

const AlertPago = ({ hidden, openModal , pago }) => {

    const {postPagoCliente} =useContext(PlanPagoContext)

const pagar=()=>{
   // console.log(pago.id);
   postPagoCliente(pago)
   openModal()
}

    return (
        <div className='modal flex justify-center items-center' style={{display : hidden ? ' ' : 'none'}}>
            <div className=' bg-white text_subtitulo font-semibold p-5 flex flex-col items-center' style={{width:'30%' }}>
               <img  className='rounded-full my-4' style={{width: '120px' , height : '120px', objectFit: 'cover'}} src="https://i.imgur.com/WyNtovk.png" alt="" />
               <span className='text_normal my-5 font-normal text-xl'> {pago?.mensualidad?.mes} restraso - Desea pagar ?  </span>
               <div className='flex w-full justify-between mt-3'>
                    <button className='btn_primary p-2' onClick={()=>pagar()}> SI, Pagar</button>
                    <button className='btn_secondary p-2' onClick={()=> openModal() } > NO, Cancelar</button>
               </div>
              
            </div>
        </div>
    )
}

export default AlertPago
