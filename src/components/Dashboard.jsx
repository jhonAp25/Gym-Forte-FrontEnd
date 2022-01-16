import React from 'react'
import CardDashboard from './CardDashboard'

const Dashboard = () => {
    return (
        <div className='h-screen bg-gray-100' style={{width : '75%'}} >
           <div className='m-auto  mt-8 ' style={{width: '90%'}} >
           <h2 className='w-4/5 font-bold text-3xl  tracking-widest text_titulo'>dashboard</h2>
                <div className='w-full flex items-center h-4/5 space-x-10 mt-5'>
                    <CardDashboard/>
                </div>

            </div>

        </div>
    )  
   
}

export default Dashboard
