import React, { useEffect } from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useContext } from 'react';
import { PlanPagoContext } from '../context/PlanPagoContext';



const schema = yup.object().shape({
    nombre: yup.string().required('Ingrese Nombre'),
    costo: yup.number().positive().required('Ingrese Costo'),
    disciplinas: yup.number('Ingrese solo numero').positive('Ingrese numero valido').required('Ingrese el Nº de disciplinas'),
    inicio: yup.date().required('Ingrese la fecha de inicio'),
    fin: yup.date().required('Ingrese la fecha de final')
  });


const FormularioPlanPago = ({ hidden, openModal }) => {
    const { register, handleSubmit,  formState: { errors } ,setValue, reset } = useForm({  resolver: yupResolver(schema) });

    const {postPlan, getPlan} = useContext(PlanPagoContext)




    
    const onSubmit=(data, e)=>{
        e.preventDefault()
        postPlan(data)
        openModal()
        console.log(data);
       
    }

    useEffect(() => {
       getPlan()
    }, [])



    return (
        <div className='modal flex justify-center items-center' style={{display : hidden ? ' ' : 'none'}}>
            <div className=' bg-white  font-semibold ' style={{width:'50%' }}>
                <div className='text-center p-5 text_subtitulo  text-xl'>
                    <p>Nuevo - Plan Pago</p>
                </div>

                <form  onSubmit={handleSubmit(onSubmit)} className={`   'hidden ' : 'block ' flex flex-col justify-between  `} style={{height: '80%'}}>

                    <div className='w-full p-5 grid grid-cols-2 gap-4'>

                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>NOMBRE</span>
                            <input className='p-2 mt-1 inputText ' placeholder='Plan 0' type="text"  {...register("nombre",{required:true})}   />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.nombre?.message }</p>
                            
                        </div>
                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>Nº DE DISCIPLINAS</span>
                            <input className='p-2 mt-1 inputText ' placeholder='0' type="text"  {...register("disciplinas",{required:true})}  />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.disciplinas?.message }</p>
                            
                        </div>

                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>FECHA INICI</span>
                            <input className='p-2 mt-1 inputText ' placeholder={` ${new Date(Date.now()).toLocaleDateString()}`} type="date"  {...register("inicio",{required:true})}   />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.inicio?.message }</p>
                            
                        </div>

                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>FECHA FINAL </span>
                            <input className='p-2 mt-1 inputText ' placeholder={` ${new Date(Date.now()).toLocaleDateString()}`} type="date"   {...register("fin",{required:true})}   /> 
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.fin?.message }</p>
                        </div>

                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>COSTO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='0.00' type="text"  {...register("costo",{required:true})}    />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.costo?.message }</p>
                        </div>

                       
                    </div>

                    <div className='w-full p-5 grid  grid-cols-5 gap-2'>
                        <button type='submit' className='col-span-4  btn_primary p-2'  >AGREGAR</button>
                        <a className='col-span-1 font-normal  btn_secondary p-2 text-center cursor-pointer' onClick={()=>openModal()} >CANCELAR</a>
                    </div>
                </form>

            </div>
            
        </div>
    )
}

export default FormularioPlanPago
