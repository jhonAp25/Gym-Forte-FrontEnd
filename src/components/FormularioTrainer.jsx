import React,{useState, useContext,useEffect} from 'react'
import imgDefault from '../Img/product_deafult.png'
import toast, { Toaster } from "react-hot-toast";
import axios from 'axios';

import { HiOutlineCamera } from "react-icons/hi";


import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DisciplinaContext } from '../context/DisciplinaContext';




const schema = yup.object().shape({
    nombre: yup.string().required('Nombre de la disciplina PORFAVOR!'),
    apellido: yup.string().required('Descripcion de la disciplina PORFAVOR!'),
    fechaNac: yup.string().required('Descripcion de la disciplina PORFAVOR!'),
    altura: yup.number().positive().required('Descripcion de la disciplina PORFAVOR!'),
    peso: yup.number().positive().required('Descripcion de la disciplina PORFAVOR!'),
    dni: yup.number().positive().required('Descripcion de la disciplina PORFAVOR!'),
    descripcion: yup.string().required('Descripcion de la disciplina PORFAVOR!'),
    disciplina: yup.string().required('La disciplina PORFAVOR!'),
    genero: yup.string().required('Descripcion de la disciplina PORFAVOR!'),
    telefono: yup.number('Solo numeros').integer('Solo numeros!!').positive().required('Descripcion de la disciplina PORFAVOR!'),
  });

const FormularioTrainer = ({openModal , hidden ,postTrainer }) => {
    const { register, handleSubmit,  formState: { errors } , reset } = useForm({  resolver: yupResolver(schema) });

    const {getDisciplina, disciplina}=useContext(DisciplinaContext);


  

    const [selectGen, setSelectGen]=useState('')
    const [imgFile , setImgFile]= useState()
    const [imgurl, setImgUrl]=useState('')

  
 

    const selectGenero=(gen)=>setSelectGen(gen)


    
    const obtenerImg = (e) => {
        console.log(' gaaaaaaaaaa');
        setImgFile(e.target.files[0])
        
  
        let body = new FormData()
        body.set("key" , '2ba0a90ff55eacd533a5bef7c9f45418')
        body.append('image',e.target.files[0])
  
    /******************* Guardar IMG *************************** */

    const myPromise =  axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: body,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response)=>{
           setImgUrl(response.data.data.url); 
           
          // setData({ ...data, 'img': response.data.data.url  })
      }).catch((error)=>{ console.log(error); })
    
      toast.promise(myPromise, {
        loading: 'Loading',
        success: 'Foto Subidaa 📷⭐',
        error: 'Error en el Servidor ❌',
      });
    
    };  


    const onSubmit=(data , e )=>{
         postTrainer(data, imgurl);

        e.target.reset()
        reset(yupResolver)
        openModal()
        setImgFile('')
        setSelectGen('')
    }


    useEffect(() => {
       getDisciplina()
    }, [])


    return (
        <div className='modal' style={{display : hidden ? ' ' : 'none'}} >
            <div className='w-full h-full flex justify-center items-center '>
           
            
            <form className=' flex  bg-white ' style={{width : '70%'}} 
                    onSubmit={handleSubmit(onSubmit)} > 
           
            <div className='w-1/4 relative' style={{background: '#cecece'}}  >
            {imgFile 
            ?<img style={{maxHeight: '100%' , maxWidth: '100%' , height: '100%', objectFit: 'cover' }} src={ URL.createObjectURL(imgFile)} alt="perfil de trainer" />
            :<img style={{maxHeight: '100%' , maxWidth: '100%' , height: '100%', objectFit: 'contain' }} src={ imgDefault} alt="perfil de trainer" />}
                
                <input type="file" className='hidden' onChange={obtenerImg} id="btnFoto"   />
                <label htmlFor='btnFoto' type='button' className='absolute bottom-4 right-4 rounded-full bg-blue-600  hover:bg-blue-500 text-white p-3'> <HiOutlineCamera size={28}  /></label>
            </div>

            <div className='flex flex-col p-2  w-3/4  space-y-5'>

            <div className='w-full p-3 '>
                <p className=' text-gray-900 text-2xl font-bold text-center' >Formulario Trainer  </p>
            </div>
            

            <div className='grid  grid-cols-2   gap-3 w-full p-3' >

                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="nombre"  >Nombre</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' type="text" placeholder='Juan '
                            {...register("nombre",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.nombre?.message }</p>
                </div>

                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="nombre"  >Apellido</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none  ' type="text" placeholder='Perez'
                            {...register("apellido",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.apellido?.message }</p>
                </div>

                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="nombre"  >DNI</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' type="text" placeholder='00000000'
                            {...register("dni",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.dni?.message }</p>
                </div>
                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="nombre"  >Fecha de Nacimiento</label>
                    <input  type='date'  className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' min="1995-01-01" max="2000-12-31"  placeholder='000/00/0000'
                            {...register("fechaNac",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.fechaNac?.message }</p>
                </div>

                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="nombre"  >Telefono o Celular</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' type="text" placeholder='999-999-99'
                            {...register("telefono",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.telefono?.message }</p>
                </div>

                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="genero"  >Genero</label>
                    <div className='flex w-full justify-between space-x-3'>

                        <div className=' w-1/2 flex items-center ' onClick={()=>selectGenero('M')} >
                            <label className='w-full p-2 bg-blue-200 hover:bg-blue-300 cursor-pointer text-center font-semibold hover:text-white focus:ring focus:ring-4 focus:ring-blue-100' style={ selectGen==='M' ? {background:"#3b82f6" , color: 'white' }: null} htmlFor="masculino"> <span> M  </span> </label>
                            <input className='hidden' type="radio" id="masculino" name="genero" value="M"{...register("genero",{required:true})}   /> 
                        </div>
                            
                        <div className='w-1/2 flex items-center'  onClick={()=>selectGenero('F')}>
                            <label  className='w-full p-2 bg-blue-200 hover:bg-blue-300 cursor-pointer text-center font-semibold hover:text-white'  style={ selectGen==='F' ? {background:"#3b82f6" , color: 'white' }: null} htmlFor="femenino"> <span> F  </span></label>
                            <input className='hidden' type="radio" id="femenino" name="genero" value="F " {...register("genero",{required:true})}  />
                        </div>
                       
                       
                    </div>
                    <p className='text-left  m-0 text-red-600'>{errors.genero?.message }</p>
                </div>


                <div className='col-span-2' >
                    <label className='text-gray-600 font-semibold'  htmlFor="descripcion"  >Descripcion</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' type="text" placeholder='Cardio'
                            {...register("descripcion",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.descripcion?.message }</p>
                </div>

                <div className='col-span-2' >
                    <label className='text-gray-600 font-semibold'  htmlFor="descripcion"  >Disciplina</label>
                    <select   className='text-gary-300 w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none  ' type="text" 
                            {...register("disciplina",{required:true})} 
                    >
                            <option selected={true}    >Seleccione su Especialidad</option>
                        {disciplina.map(d=>(
                            <option className='p-3' value={d.id} >{d.nombre}</option>
                        ))}
                       
                    </select>
                    <p className='text-left  m-0 text-red-600'>{errors.disciplina?.message }</p>
                </div>

            </div>


            <hr className='w-full border-gray-500' />



            <div className='grid  grid-cols-2   gap-3 w-full p-3' >

                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="talla"  >Altura</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100  p-2 rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none  ' type="text" placeholder='Cardio'
                            {...register("altura",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.altura?.message }</p>
                </div>

                <div className='' >
                    <label className='text-gray-600 font-semibold'  htmlFor="peso"  >Peso</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' type="text" placeholder='Cardio'
                            {...register("peso",{required:true})} 
                            />
                    <p className='text-left  m-0 text-red-600'>{errors.peso?.message }</p>
                </div>

            </div>


            <div className='flex pt-3 pr-3 pl-3 space-x-3'>
                <button className='w-9/12 bg-blue-500 hover:bg-blue-600 p-3 text-white'>AGREGAR </button>
                <button type='button' className='w-3/12 bg-indigo-200 hover:bg-indigo-300 p-3 text-white ' onClick={()=> openModal() } >CANCELAR </button>
            </div>

            </div> 

           
            

           

            </form>
            </div>
        </div>
    )
}

export default FormularioTrainer
