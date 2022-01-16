import { useState } from "react";
import { AiFillCaretLeft ,AiFillCaretRight } from "react-icons/ai";

const BtnAltura = ({altura}) => {

    const [newAltura , setNewAltura]=useState(altura)

 const changeMinus=()=>{
    setNewAltura(parseFloat(newAltura-0.01).toFixed(2))
    
    return;
 }

 const changePlus =()=>{
    setNewAltura(parseFloat(newAltura) + 0.05 )
    return;
 }

    return (    
        <div className='bg-yellow-500 flex rounded-full items-center justify-between border mb-3 w-1/2'>
            <AiFillCaretLeft color="#fff" size={30} className=" mx-2 cursor-pointer hover " onClick={()=>changeMinus()} /> 
            <div className="bg-white w-full h-full  flex rounded-full text-center py-2 flex- justify-center items-center "> <p className=" font-semibold text-xl"> {newAltura} </p> <p className="  font-light text-sm">cm</p> </div>
            <AiFillCaretRight color="#fff" size={30} className=" mx-2 cursor-pointer" onClick={()=>changePlus()}  />
        </div>
    )
}

export default BtnAltura