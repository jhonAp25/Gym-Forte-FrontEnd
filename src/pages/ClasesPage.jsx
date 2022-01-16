import { get } from 'http'
import React,{useContext, useEffect, useState} from 'react'
import Calendario from '../components/Calendar'
import FormularioClase from '../components/FormularioClase'
import { ClaseContext } from '../context/ClaseContext'
import { DisciplinaContext } from '../context/DisciplinaContext'

const ClasesPage = () => {
    const {getDisciplina, disciplina}=useContext(DisciplinaContext);
    const {getClaseDisciplina , clase} =useContext(ClaseContext)


    const [hidden , setHidden] = useState(false)
    const[newDisciplina, setNewDisciplina]=useState()
    const[cancel, setCancel]=useState(false)

    const [ dateTime, setDateTime]=useState([])


    const [newEvento, setNewEvento]=useState([])
  


    


    const openModal =()=>{ setHidden(!hidden) }

    const obtenerDisciplina=(e)=>{
        setNewDisciplina(e.target.value)      
        getClaseDisciplina(e.target.value.split('-')[1])
        

        setNewEvento([])

        clase.map(c=>{
             setNewEvento([...newEvento,{
               title : c.disciplina.nombre,
               start: new Date(c.horaIni),
               end:  new Date(c.horaFin)}])
        })
       
        console.log(newEvento);

      
        
    }

    useEffect(() => {

        getDisciplina()
     
    }, [])




    return (
        <div className='flex flex-col  px-20 pt-10  h-full  bg-gray-100' >
            <h2 className='w-full font-bold text-3xl tracking-widest text_titulo'>CLASES <span className='text_titulo02'> {newDisciplina?.split('-')[0]}</span></h2>


            <div className='grid grid-cols-4 gap-5 mt-5 ' >

            
                
                <div className='col-span-1  ' >
                    <select   className='text-gary-300 w-full rounded focus:ring-2 focus:border-blue-100 p-2  rounded-none border border-gray-400 bg-white placeholder-gray-400 focus:outline-none  ' type="text"
                        onChange={(e)=>{obtenerDisciplina(e)}}>
                        <option selected={true} >Seleccione su Disciplina</option>
                        {disciplina.map(d=>(
                            <option className='p-3' key={d.id} value={d.nombre + '-' +d.id} >{d.nombre}</option>
                        ))}
                       
                    </select>
                    
                </div>

                <div className='col-span-full' >
                    <Calendario  openModal={openModal} newDisciplina={newDisciplina} setDateTime={setDateTime} newEvento={newEvento} setNewEvento={setNewEvento}   hidden={hidden}   />
                </div>
               
                    <FormularioClase hidden={hidden} openModal={openModal} newDisciplina={newDisciplina} setCancel={setCancel} dateTime={dateTime} />

            </div>
        </div>
    )
}

export default ClasesPage
