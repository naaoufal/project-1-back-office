import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import NavBarScreen from './subComponent/Navbar'
import SideBarScreen from './subComponent/SideBar'
// import './main.css'

const DashboardScreen = () => {
    return (
        <div class="container-scroller">
            <NavBarScreen />
            <SideBarScreen />
        </div>
    )
}

export default DashboardScreen