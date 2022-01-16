import React from 'react'
import Dashboard from '../components/Dashboard'
import DetalleDashboard from '../components/DetalleDashboard'
import Navbar from '../components/Navbar'

const Admin = () => {
    return (
        <div className='flex' >
     
            <Dashboard/>
            <DetalleDashboard/>
        </div>
    )
}

export default Admin
