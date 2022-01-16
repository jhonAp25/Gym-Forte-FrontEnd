import React,{useContext} from 'react'
import fondo from '../Img/fondoLogin.png'
import { LogoGym } from '../Img/iconosSvg'

import { useForm } from "react-hook-form";
import { LoginContext } from "../context/LoginContext";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import Notificacion from './Notificacion';

const Login = () => {

    
    //*********CONTEXT*******************
    let { signIn , error ,setError} = useContext(LoginContext)


    //  ***********YUP ERRRORES******************
    const schema = yup.object().shape({
        usuario: yup.string().required('Usuario es requerido.'),
        contrasena: yup.string().required('UPS! Se le olvido su contrasenia..')
    });



       //Use Form....
   
  const { register, handleSubmit, watch, formState: { errors } } = useForm({ resolver: yupResolver(schema)});
  const onSubmit = data =>{

      signIn(data)
      setTimeout(() => { setError("")}, 900);
   
  } 
 


    return (
        <div>
            <Notificacion></Notificacion>
            <div className='content_fondo'>
                <div className='fondo'></div>
                <img src={fondo} alt="" srcset="" className='imgFondo' />
            </div>
           
            
            <div className='w-full h-screen relative z-50 flex'>
                <div className='w-1/2 flex flex-col  items-center p-20'>
                    <LogoGym/>

                    <div className='h-full flex justify-center  items-center'>
                        <p className='flex text-center text-white text-2xl italic tracking-widest text_frase' style={{width: '420px'}}>
                         Solo los caminos duros llevan a la grandeza 
                        </p>
                    </div>
                        
                </div>

                <div className='w-1/2 flex justify-center items-center'>
               
                    <form className='content-login p-5 flex flex-col justify-between '    onSubmit={handleSubmit(onSubmit)} >
                        <div className='w-full'>
                            <p className=' w-full text-center text_titulo_login'>LOGIN</p>
                        </div>

                        <div className='w-full '>

                            <div className='flex flex-col'>
                                <span className='text_normal font-semibold text-sm '>USUARIO</span>
                                <input className='p-2 mt-1 inputText ' placeholder='JhonAp25' type="text"   {...register("usuario", { required: true })}  />
                                <p className='text-left text-sm m-0 text-red-600'>{errors.usuario?.message }</p>
                            </div>

                            <div className='flex flex-col mt-7'>
                                <span className='text_normal font-semibold text-sm '>PASSWORD</span>
                                <input className='p-2 mt-1 inputText ' placeholder='123456789' type="password"   {...register("contrasena",{required:true})} />
                                <p className='text-left text-sm  m-0 text-red-600'>{errors.contrasena?.message }</p>
                            </div>

                        </div>
                        <div className='w-full'>
                            <button className='w-full btn_primary p-2'>
                                    Ingresar
                            </button>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
