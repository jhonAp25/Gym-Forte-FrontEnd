import React, { useContext, useEffect } from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DisciplinaContext } from '../context/DisciplinaContext';
import { TrainerContext } from '../context/TrainerContext';
import { ClaseContext } from '../context/ClaseContext';
import { SalonContext } from '../context/SalonContext';

const FormularioClase = ({ hidden, openModal , newDisciplina, setCancel, dateTime}) => {

    const schema = yup.object().shape({
        trainer: yup.string().required('Ingrese Trainer !'),
        salon: yup.string().required('Ingrese Salon !'),
        cuposMax: yup.number('Solo numeros').integer('Solo numeros').positive().required('Agrege los cupos MAX'),
      });
    
   
    let { getTrainer , trainer} = useContext(TrainerContext)
    let {postClase} =useContext(ClaseContext)
    let {getSalon, salon} =useContext(SalonContext)
    const { register, handleSubmit,  formState: { errors } , reset } = useForm({  resolver: yupResolver(schema) });



    const onSubmit = (data, e) => {
       // console.log(newDisciplina?.split('-')[1]);
        postClase(data, parseInt(newDisciplina?.split('-')[1]) , dateTime)
       // console.log(dateTime)
        e.target.reset()
        reset(yupResolver)

        openModal()
       
    }


    useEffect(() => {
        getSalon()
       getTrainer()
    }, [])


    return (
        <div className='modal' style={{display : hidden ? ' ' : 'none'}}>
            <div className='w-full h-full flex justify-center items-center '>   
            <form className=' flex flex-col  bg-white ' style={{width : '40%'}} onSubmit={handleSubmit(onSubmit)} >
                
            <div className='w-full p-3 '>
                <p className=' text-gray-900 text-2xl font-bold text-center' >Clase </p>
            </div>
            

            <div className='grid  grid-cols-4   gap-3 w-full p-3' >

                

                <div className='col-span-4' >
                    <label className='text-gray-600 font-semibold text-sm uppercase'  htmlFor="nombre"  >Trainer</label>
                    <select   className='text-gary-300 w-full focus:ring-2 focus:border-blue-100 p-2 catipalize  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none  ' type="text" 
                            {...register("trainer",{required:true})} 
                    >
                            <option selected={true}    >Seleccione su Trainer</option>
                        {trainer.map(t=>(
                            <option className='p-3' value={t.id} >{t.nombre}, {t.apellido}</option>
                        ))}
                       
                    </select>
                    <p className='text-left  m-0 text-red-600'>{errors.trainer?.message }</p>
                </div>

                <div className='col-span-3' >
                    <label className='text-gray-600 font-semibold text-sm uppercase'  htmlFor="nombre"  >Salon</label>
                   {/* <input  type='text'  className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   '   placeholder='00'
                          {...register("salon",{required:true})} 
                        />*/}
                   
                   
                    <select   className='text-gary-300 w-full focus:ring-2 focus:border-blue-100 p-2 catipalize  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none  ' type="text" 
                            {...register("salon",{required:true})} 
                    >
                            <option selected={true}    >Seleccione Salon</option>
                        {salon.map(s=>(
                            <option className='p-3' value={s.id} >{s.descripcion}</option>
                        ))}
                       
                    </select>
                    
                    <p className='text-left  m-0 text-red-600'>{errors.salon?.message }</p>
                </div>
                <div className='col-span-1' >
                    <label className='text-gray-600 font-semibold text-sm uppercase'  htmlFor="nombre"  >Cupos Max</label>
                    <input  type='text'  className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   '   placeholder='00'
                            {...register("cuposMax",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.cuposMax?.message }</p>
                </div>

            
                <div className='col-span-4 flex  col-span-2  space-x-3'>
                    <button className='w-9/12 btn_primary p-3 text-white'>AGREGAR </button>
                    <button type='button' className='w-3/12 btn_secondary p-3 text-white ' onClick={()=>{openModal() } } >CANCELAR </button>
                </div>
                </div>

            </form>
            </div>
        </div>
    )
}

export default FormularioClase
