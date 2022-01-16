import React,{useContext,useEffect, useState } from 'react'
import CardTrainer from '../components/CardTrainer'
import { HiPlusCircle } from "react-icons/hi";
import {FiSearch} from "react-icons/fi";
import { TrainerContext } from '../context/TrainerContext';
import FormularioTrainer from '../components/FormularioTrainer';
import UpdateTrainer from '../components/UpdateTrainer';


const TrainerPage = () => {

    let { getTrainer , trainer, postTrainer, getTrainerBusqueda} = useContext(TrainerContext);


    const [hidden , setHidden] = useState(false)
    const [hiddenUpdat , setHiddenUpdat] = useState(false)
    const [dataTrainer, setDateTrainer]=useState([])

    const openModal =()=>  setHidden(!hidden)
    const openModalUpdat =(data)=> {
        setHiddenUpdat(!hiddenUpdat);
        console.log(data);
        setDateTrainer(data)
    }



    const filtroTrainer=(e)=>{
        getTrainerBusqueda(e.target.value)
    }




    useEffect(() => {
        getTrainer()
    }, []);



    return (
        <div className='flex flex-col  px-20 pt-10  h-full  bg-gray-100' >
            
        <h2 className='w-4/5 font-bold text-3xl tracking-widest text_titulo'>TRAINER</h2>
        
        <FormularioTrainer hidden={hidden} openModal={openModal} postTrainer={postTrainer}  />
        <UpdateTrainer hiddenUpdat={hiddenUpdat} dataTrainer={dataTrainer} openModalUpdat={openModalUpdat}/>

       

        <div className='w-full flex mt-10'>
                <div className='w-full  rounded-full border flex items-center bg-white focus:ring-2   border border-gray-400  'style={{width: '40%'}}  >
                    <input type="text" onChange={(e)=>filtroTrainer(e) }  name="" className='w-full p-2 rounded-full  focus:outline-none'  />  <FiSearch size={20} color='#011826' className='mr-3' /> 
                </div>
                <button className='btn_primary px-5 ml-4' onClick={()=>openModal()} > Agregar </button>
        </div>

                        
         <div className='w-full  p-2 grid grid-cols-3 gap-4 overflow-y-auto' style={{maxHeight: '40rem'}} >

            {trainer.map(t=>(
                <CardTrainer data={t} openModalUpdat={openModalUpdat} />
            ))}
           
            
        </div>

            
        </div>
    )
}

export default TrainerPage
