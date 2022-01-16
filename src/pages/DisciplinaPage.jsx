import React, { useContext, useEffect, useState } from 'react'
import FormEx from '../components/FormEx';
import FormularioDisciplina from '../components/FormularioDisciplina'
import ListadoDisciplina from '../components/ListadoDisciplina'
import { DisciplinaContext } from "../context/DisciplinaContext";



const DisciplinaPage = () => {

    let { getDisciplina , disciplina ,postDisciplina, putDisciplina} = useContext(DisciplinaContext);

    const [newDisciplina, setNewDisciplina]=useState([])



    useEffect(() => {
        getDisciplina()

        
    }, []);
    return (
        <div className='flex h-full bg-gray-100' >
            <div className=' h-full m-auto  ' style={{width: '90%'}} >
                <h2 className='w-4/5font-bold text-3xl tracking-widest text_titulo mt-10'>Disciplina</h2>
                <div className='w-full flex items-center h-4/5 space-x-10'>
                    <div className='w-1/2'>
                       <FormularioDisciplina postDisciplina={postDisciplina} newDisciplina={newDisciplina} putDisciplina={putDisciplina} /> 
                       {/*** <FormEx/>*/} 
                    </div>
                    

                    <div className='w-1/2 h-full'>
                        <ListadoDisciplina disciplina={disciplina}  setNewDisciplina={setNewDisciplina}/>
                    </div>
                </div>

            </div>
          
        </div>
    )
}

export default DisciplinaPage
