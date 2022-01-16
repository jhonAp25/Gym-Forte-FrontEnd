import React,{ useState, useContext }  from 'react'
import CardPlan from './CardPlan'
import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ClienteContext } from '../context/ClienteContext';
import { PlanPagoContext } from '../context/PlanPagoContext';


const schema = yup.object().shape({
    nombre: yup.string().required('Ingrese nombre'),
    apellido: yup.string().required('Ingrese apellido'),
    sexo: yup.string().required('Ingrese el Genero'),
    correo: yup.string().email('Ingrese correo valido').required('Obligatorio su correo'),
    celular: yup.number('Solo numeros').integer('Solo numeros!!').positive().required('Ingrese Su numero telefonico'),
  });




const FormularioCliente = ({ hidden, openModal }) => {
    const { register, handleSubmit,  formState: { errors } , reset } = useForm({  resolver: yupResolver(schema) });
    const {postCliente, idCliente}=useContext(ClienteContext);
    const { getPlan, plan, postMatricula} = useContext(PlanPagoContext)


    const [active, setActive] =useState(false)
    const [selectGen, setSelectGen]=useState('')
    const [cardSelect, setCardSelect] =useState(0)

    const selectGenero=(gen)=>setSelectGen(gen)



    const siguienteFormulario=()=>{
        setActive(!active)
    }  
    


    const onSubmit=(data )=>{
        siguienteFormulario()
        postCliente(data)
    
      
   }
   const matricula=()=>{
        postMatricula(cardSelect, idCliente)
        openModal()
        setActive(false)
   }


    return (
        <div className='modal flex justify-center items-center' style={{display : hidden ? ' ' : 'none'}}>
            <div className=' bg-white text_subtitulo font-semibold ' style={{width:'70%' }}>
                <div className='text-center p-5  text-xl'>
                    <p>Nuevo - Cliente</p>
                </div>
                <div className='w-full p-1 relative' style={{backgroundColor: 'rgba(1, 24, 38, 0.31)'}} >
                    <div className={` ${active? 'w-full' : 'w-1/2 '}  p-1 absolute transition  duration-700 ease-in-out `} style={{top: '0', left: '0' , backgroundColor:'#F20544'}}></div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className={`  ${active? 'hidden ' : 'block '} flex flex-col justify-between  `} style={{height: '80%'}}>

                    <div className='w-full p-5 grid grid-cols-2 gap-4'>

                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>NOMBRE</span>
                            <input className='p-2 mt-1 inputText ' placeholder='Jhon Elvis' type="text"   {...register("nombre",{required:true})}    />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.nombre?.message }</p>
                            
                        </div>
                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>APELLIDO</span>
                            <input className='p-2 mt-1 inputText ' placeholder='Apaza Larico' type="text"   {...register("apellido",{required:true})}   />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.apellido?.message }</p>
                            
                        </div>

                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>CELULAR</span>
                            <input className='p-2 mt-1 inputText ' placeholder='999-999-999' type="text"   {...register("celular",{required:true})}   />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.celular?.message }</p>
                            
                        </div>

                        <div className=' col-span-1 flex flex-col'>
                            <span className='text_normal font-semibold text-sm '>CORREO </span>
                            <input className='p-2 mt-1 inputText ' placeholder='xxxxxxx@gmail.com' type="text"   {...register("correo",{required:true})}   />
                            <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.correo?.message }</p>
                            
                        </div>

                        <div className=' col-span-1 flex flex-col'>
                            
                            <div className='' >
                            <span className='text_normal font-semibold text-sm '>GENERO </span>
                                <div className='flex w-full justify-between space-x-3'>

                                    <div className=' w-1/2 flex items-center ' onClick={()=>selectGenero('M')} >
                                        <label className='w-full p-2 btn_darck cursor-pointer text-center font-semibold hover:text-white focus:ring focus:ring-4 focus:ring-blue-100' style={ selectGen==='M' ? {background:"#012340" , color: 'white' }: null} htmlFor="masculino"> <span> M  </span> </label>
                                        <input className='hidden' type="radio" id="masculino" name="genero" value="M"{...register("sexo",{required:true})}   /> 
                                    </div>
                                    
                                    <div className='w-1/2 flex items-center'  onClick={()=>selectGenero('F')}>
                                        <label  className='w-full p-2 btn_darck cursor-pointer text-center font-semibold hover:text-white'  style={ selectGen==='F' ? {background:"#012340" , color: 'white' }: null} htmlFor="femenino"> <span> F  </span></label>
                                        <input className='hidden' type="radio" id="femenino" name="genero" value="F " {...register("sexo",{required:true})}  />
                                    </div>
                            
                            
                                </div>
                                <p className='text-left text-xs font-normal m-0 text-red-600'>{errors.sexo?.message }</p>
                            </div>
                            
                        </div>
                    </div>

                    <div className='w-full p-5 grid  grid-cols-5 gap-2'>
                        <button type='submit' className='col-span-4  btn_primary p-2' >Siguiente</button>
                        <a className='col-span-1 text-center font-normal cursor-pointer btn_secondary p-2' onClick={()=>openModal()} >Cancelar</a>
                    </div>
                </form>

                <div className={`  ${active? 'block ' : 'hidden '} flex flex-col justify-between  `} style={{height: '80%'}}>
                    <div className='w-full p-5 grid grid-cols-2 gap-4 overflow-y-scroll'>

                        
                    {plan.map(p=>(
                        <CardPlan key={p} data={p} setCardSelect={setCardSelect} />
                        
                    ))}
                        

                        
                    </div>
                   
                    <div className='w-full p-5 grid  grid-cols-5 gap-2'>
                        <button className='col-span-full  btn_primary p-2'onClick={()=>matricula()} >Finalizar</button>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default FormularioCliente
