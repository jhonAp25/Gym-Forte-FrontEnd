import React,{useState, useContext,useEffect} from 'react'

import { HiOutlineCamera } from "react-icons/hi";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TrainerContext } from '../context/TrainerContext';

  const schema = yup.object().shape({
        telefono: yup.number().positive().required('Nombre de la disciplina PORFAVOR!'),
        peso: yup.string().required('Descripcion de la disciplina PORFAVOR!'),
        altura: yup.string().required('Descripcion de la disciplina PORFAVOR!'),
        descripcion: yup.string().required('Descripcion de la disciplina PORFAVOR!')
      });


const UpdateTrainer = ({dataTrainer,hiddenUpdat, openModalUpdat}) => {
    const { register, handleSubmit,  formState: { errors } ,setValue, reset } = useForm({  resolver: yupResolver(schema) });

    const {putTrainer} =useContext(TrainerContext)

   
  
    /******************************* */


    const onSubmit=(data )=>{
        putTrainer(data, dataTrainer)
        openModalUpdat()
       // console.log(data);
    }

    useEffect(() => {
       
        setValue("telefono", dataTrainer?.telefono);
        setValue("descripcion", dataTrainer?.descripcion);
        setValue("peso", dataTrainer?.peso);
        setValue("altura", dataTrainer?.altura);


    }, [dataTrainer])



    return (
        <div className='modal' style={{display : hiddenUpdat ? ' ' : 'none'}} >
            <div className='w-full h-full flex justify-center items-center '>
           
            
            <form className=' flex  bg-white ' style={{width : '50%'}}   onSubmit={handleSubmit(onSubmit)}  > 
           
            <div className='w-1/3 relative' style={{background: '#cecece'}}  >
                <img style={{maxHeight: '100%' , maxWidth: '100%' , height: '100%', objectFit: 'cover' }} src={ dataTrainer?.foto} alt="perfil de trainer" />
                
                <input type="file" className='hidden'  id="btnFoto"   />
                <label htmlFor='btnFoto' type='button' className='absolute bottom-4 right-4 rounded-full bg-blue-600  hover:bg-blue-500 text-white p-3'> <HiOutlineCamera size={28}  /></label>
            </div>

            <div className='flex flex-col p-2  w-3/4  space-y-5'>

            <div className='w-full p-3 '>
                <p className=' text_normal text-2xl font-bold text-center capitalize' >{dataTrainer?.apellido}, {dataTrainer?.nombre} </p>
            </div>
            

            <div className='grid  grid-cols-2   gap-3 w-full p-3' >

                <div className=' col-span-2 flex flex-col'>
                   
                    <div className='w-full flex items-center'>
                        <p className='w-1/2 text_normal font-semibold text-sm '>TELEFONO</p>
                        <input className='w-1/2 p-2 mt-1 inputText ' placeholder='Jhon Elvis' type="text"   {...register("telefono",{required:true})}    />
                    </div>
                   
                    <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.telefono?.message }</p>
                    
                </div>

                <div className=' col-span-2 flex flex-col'>
                   
                    <div className='w-full flex items-center'>
                        <p className='w-1/2 text_normal font-semibold text-sm '>PESO</p>
                        <input className='w-1/2 p-2 mt-1 inputText ' placeholder='Jhon Elvis' type="text"   {...register("peso",{required:true})}    />
                    </div>
                   
                    <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.peso?.message }</p>
                    
                </div>


                <div className=' col-span-2 flex flex-col'>
                   
                    <div className='w-full flex items-center'>
                        <p className='w-1/2 text_normal font-semibold text-sm '>ALTURA</p>
                        <input className='w-1/2 p-2 mt-1 inputText ' placeholder='Jhon Elvis' type="text"   {...register("altura",{required:true})}    />
                    </div>
                   
                    <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.altura?.message }</p>
                    
                </div>


                <div className=' col-span-2 flex flex-col'>
                   
                    <div className='w-full flex items-center'>
                        <p className='w-1/2 text_normal font-semibold text-sm '>DESCRIPCION</p>
                        <input className='w-1/2 p-2 mt-1 inputText ' placeholder='Jhon Elvis' type="text"   {...register("descripcion",{required:true})}    />
                    </div>
                   
                    <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.descripcion?.message }</p>
                    
                </div>

                

            </div>



            

            <div className='flex pt-3 pr-3 pl-3 pb-4 space-x-3'>
                <button className='w-9/12 btn_primary p-3 text-white uppercase'>Actualizar </button>
                <button type='button' className='w-3/12  btn_secondary p-3 text-white ' onClick={()=>openModalUpdat()}  >CANCELAR </button>
            </div>

            </div> 

            </form>
            </div>
        </div>
    )
}

export default UpdateTrainer
