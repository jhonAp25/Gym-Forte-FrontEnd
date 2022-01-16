import React from 'react'
import { HiPencilAlt, HiTrash } from "react-icons/hi";

const ListadoDisciplina = ({disciplina, setNewDisciplina}) => {




    const editarDisciplina= (newD)=>{
      
        setNewDisciplina(newD)
    }




    return (
        <div className='p-4 bg-white shadow-lg ' style={{maxHeigth : '700px'}} >

            <div className='pt-3 pb-3 bg-blue-200'   >
                <h3  className='p-2 font-semibold text-gray-700 text-2xl w-full' >Listado</h3>
               
            </div>

            

            <div className='mt-5 space-y-2 overflow-y-scroll'  style={{maxHeight: '550px'}} >

                {disciplina.map(d=>(
                       <div className='grid grid-cols-12 hover:bg-gray-100 p-1 cursor-pointer'>

                        <div className='col-span-2' style={{width: '50px'}} >
                            <img className='rounded-md' src={d.imagen} style={{width: '100%'}}  alt="" />
                        </div>
                        
                        <div className='col-span-9 flex items-center '>
                            <h3 className='font-ligth text-lg text-gray-700 capitalize' >{d.nombre}</h3>
                        </div>

                        <div className='col-span-1'>
                           <button className='text-gray-700 hover:text-blue-600 focus:ring-4  p-2' onClick={()=>editarDisciplina(d)} ><HiPencilAlt className='' size={25}/></button>
                        </div>

                   </div>
                ))}

             

                
              

            </div>




           
        </div>
    )
}

export default ListadoDisciplina
