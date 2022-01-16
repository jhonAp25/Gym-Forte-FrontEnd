import React, {useContext, useState} from 'react'
import {FiSearch} from "react-icons/fi";
import CardPlan from '../components/CardPlan';
import FormularioPlanPago from '../components/FormularioPlanPago';
import { PlanPagoContext } from '../context/PlanPagoContext';


const PlanPago = () => {
    const { getPlan, plan} = useContext(PlanPagoContext)


    const [hidden , setHidden] = useState(false)


    const openModal =()=>{ setHidden(!hidden) }


    return (
        <div className='flex flex-col  px-20 pt-10  h-full  bg-gray-100' >
             <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>Plan Pago</h2>

             <div className='w-full flex mt-10'>
                <div className='w-full  rounded-full border flex items-center bg-white focus:ring-2   border border-gray-400  'style={{width: '40%'}}  >
                    <input type="text" name="" className='w-full p-2 rounded-full  focus:outline-none'  />  <FiSearch size={20} color='#011826' className='mr-3' />
                
                </div>
                <button className='btn_primary px-5 ml-4' onClick={()=>openModal()}  > Agregar </button>
                <FormularioPlanPago  openModal={openModal}    hidden={hidden}  />
            </div>

            <div className='grid grid-cols-2 grid-rows-1 gap-4 mt-10' style={{maxHeight: '29rem'}}>
             
                    {plan.map(p=>(
                        <CardPlan key={p} data={p} />
                            
                    ))}

                  
                 
 
             
               
            </div>
        </div>
    )
}

export default PlanPago
