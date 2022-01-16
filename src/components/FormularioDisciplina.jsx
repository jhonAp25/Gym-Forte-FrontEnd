import React,{useEffect, useRef, useState} from 'react'

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AiOutlineCloudUpload } from "react-icons/ai";

import axios from "axios"
import toast, { Toaster } from "react-hot-toast";



const schema = yup.object().shape({
    nombre: yup.string().required('Nombre de la disciplina PORFAVOR!'),
    descripcion: yup.string().required('Descripcion de la disciplina PORFAVOR!')
  });


const FormularioDisciplina = ({postDisciplina , newDisciplina, putDisciplina}) => {
  
  const { register, handleSubmit,  formState: { errors }, setValue , reset } = useForm({  resolver: yupResolver(schema) , 
  
});

  
  const [imgurl, setImgUrl]=useState('')
  const [idDisciplina, setIdDisciplina]=useState('')


  const textFile = useRef()





  
/******************* IMG *************************** */
  const obtenerImg = (e) => {
  
    

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












      const onSubmit = (data, e) => {
        idDisciplina ? putDisciplina(idDisciplina,data,imgurl):postDisciplina(data, imgurl)

        //Resetear
        e.target.reset()
        setIdDisciplina('')
        reset(yupResolver)
        setImgUrl('')

      };

      useEffect(() => {
          setIdDisciplina(newDisciplina.id)
        if(idDisciplina!=0){
          setImgUrl(newDisciplina.imagen)
          setValue("nombre", newDisciplina.nombre);
          setValue("descripcion", newDisciplina.descripcion);
        }
         
      }, [newDisciplina])



    return (
    <div className=' bg-white shadow-lg  '>
            <div className='p-3 mb-2 border-b'>
                <h3 className='font-semibold text-gray-900 text-xl' >Nueva Disciplina</h3>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='p-4 grid grid-rows-5 grid-cols-3 gap-4 ' style={{maxHeight: '320px'}} >


                <div onClick={()=>textFile.current.click()} className='flex flex-col  row-span-4'>

                  <label className=' text_normal font-semibold mb-1 uppercase text-xs'  htmlFor="nombre"  >Imagen</label>

                  <div className='bg-gray-100 flex flex-col justify-center items-center h-full  p-2 justify-center items-center  cursor-pointer  hover:bg-gray-200' style={{border: '1px dashed #3F618C'}} >
                  {imgurl 
                  ? <img style={{maxHeight: '100%' , maxWidth: '100%' , height: '100%', objectFit: 'cover' }} src={imgurl} alt="perfil de trainer" />
                  : <div className='flex flex-col justify-center items-center'>
                      <AiOutlineCloudUpload size={30} color='#2563EB'/>
                      <span  className='text-sm text-center text_normal'  >Seleccione una imagen</span>
                    </div>}

                  </div>

                    <input type="file" ref={textFile} className='hidden' onChange={obtenerImg} id="btnFoto"   />
                   
                </div>

                <div className='col-span-2  row-span-1'>
                    <label className=' text_normal font-semibold mb-1 uppercase text-xs'  htmlFor="nombre"  >Nombre</label>
                    <input   className='w-full focus:ring-2 focus:border-blue-100 p-2 rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' type="text" placeholder='Cardio'
                          {...register("nombre",{required:true})} 
                           />
                    <p className='text-left text-xs  m-0 text-red-600'>{errors.nombre?.message }</p>
                </div>

                <div className='col-span-2  row-span-2 mt-4'>
                    <label className=' text_normal font-semibold mb-1 uppercase text-xs'  htmlFor="txtDescr"  >Descripcion</label>
                    <textarea  {...register("descripcion",{required:true})}   style={{maxHeight : '126px', minHeight: '105px' , height: '126px'  , resize:"none" , overflowY : 'auto'}}  id='txtDescr' className='w-full focus:ring-2 focus:border-blue-100 p-2 rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none   ' type="text" placeholder='bla bla bla bla ...' />
                    <p className='text-left text-xs m-0 text-red-600'>{errors.descripcion?.message }</p>
                </div>

                <div className='col-span-full  '>

                {idDisciplina
                ?   <button type="submit"  className={`w-full p-2  btn_primary focus:ring-4   ${imgurl ? null :"opacity-10"}`}   disabled={imgurl ? false : true}  > ACTUALIZAR </button>
                :   <button type="submit"  className={`w-full p-2   btn_primary focus:ring-4   ${imgurl ? null :"opacity-10"}`}   disabled={imgurl ? false : true}  > AGREGAR </button>
    
                }
                </div>

                </form>

               
        </div> 


    
    )
}

export default FormularioDisciplina
