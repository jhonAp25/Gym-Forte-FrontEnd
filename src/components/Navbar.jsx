import React from 'react'
import logo from  '../Img/logoGYM.png'
import { AiOutlineDashboard,AiOutlineTeam ,AiOutlinePartition, AiOutlineException } from "react-icons/ai";
import { IoTrophyOutline } from "react-icons/io5";
import {FiSlack} from "react-icons/fi";
import {GiGymBag} from  "react-icons/gi";
import { NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='h-screen w-1/5'  >
            <div className='w-full p-5 flex flex-col justify-center items-center' style={{height: '28%'}}>
                <img src={logo} alt='logoGymForte' style={{width: 'auto',height: '81px'}} className='mt-3' />
                <span className='text_normal mt-4'> Jhon Elvis Apaza Larico </span>
            </div>

  
            <hr className='w-full mb-4' />
           
            <div className='' style={{height: '50%'}}>
                <ul className='h-full w-full flex justify-around  flex-col '>                                                                            
                    <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold " className='flex font-semibold text_normal  cursor-pointer nav_item  ' to="/inicio" exact>
                        <div className='flex py-4'>
                            <AiOutlineDashboard  size={25} className='mx-5 '   /> <p  >Dashboard </p> 
                        </div>
                       
                    </NavLink>

                    <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold " className='flex font-semibold text_normal  cursor-pointer nav_item  '  to="/cliente" exact >
                        <div className='flex py-4'>
                            <AiOutlineTeam  size={25}  className='mx-5 '  />  <p   >Clientes </p> 
                        </div>
                    </NavLink>

                    <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item  ' to="/clase"  >
                        <div className='flex py-4'>
                            <GiGymBag size={25}  className='mx-5 ' /> <p   >Clases </p> 
                        </div>
                    </NavLink>

                    <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item  ' to="/plan_pago"  >
                        <div className='flex py-4'>
                            <AiOutlineException size={25}  className='mx-5 ' /> <p   >Planes Pago </p> 
                        </div>
                    </NavLink>
                    
                    <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold  "className='flex font-semibold text_normal  cursor-pointer nav_item  '  to="/trainer" > 
                        <div className='flex py-4'>
                            <IoTrophyOutline size={25}  className='mx-5 '/> <p   >Trainers </p>
                        </div>
                    </NavLink>

                    <NavLink activeClassName="nav_active bg-blue-200  text-blue-500 font-bold "className='flex font-semibold text_normal  cursor-pointer nav_item  '  to="/disciplina" >
                        <div className='flex py-4'>
                            <FiSlack size={25}  className='mx-5 '/> <p   >Disciplina </p> 
                        </div>
                    </NavLink>

                </ul>                                                                                                                       
            </div>
      
 
        </div>
    )
}

export default Navbar
