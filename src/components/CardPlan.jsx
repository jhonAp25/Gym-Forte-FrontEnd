import React from 'react'
import { useState } from 'react'

const CardPlan = ({data, setCardSelect}) => {
    const [select , setSelect] =useState(false)
   

    const selectCard=(id)=>{ 
     
        setSelect(!select)
        setCardSelect(id)
      
        
    }


    return (
        <div className={`flex flex-col p-5 rounded-lg justify-between card_plan  ${select ? ' card_active ' : null } `}    onClick={()=>selectCard(data?.id)} >
            <span className='font-semibold text-white'>{data?.nombre}</span>

            <div className='flex justify-between items-end '>
                <div className='flex flex-col '>
                    <span className='text-white font-light text-sm '>{new Date(data?.inicio).toDateString() } -  {new Date(data?.finn).toDateString()}</span>
                    <span className='text-white mt-1'>Incluye {data?.disciplinas} disciplinas </span>
                </div>
                <span className=' font-bold text-6xl' style={{color: '#ffffff33'}}> S/. {data?.costo} </span>
            </div>
        </div>
    )
}

export default CardPlan
