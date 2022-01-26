import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import './main.css'

const SideBarScreen = () => {

    // Our functions will be here :
    const navigation = useNavigate()

    return (
        <nav class="sidebar sidebar-offcanvas" id="sidebar">
            <ul class="nav">
                <li class="nav-item">
                    <a onClick={() => navigation('/dashboard')} class="nav-link">
                    <i class="icon-grid menu-icon"></i>
                    <span class="menu-title">Dashboard</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a onClick={() => navigation('/places   ')} class="nav-link">
                    <i class="icon-layout menu-icon"></i>
                    <span class="menu-title">Mes Monuments</span>
                    <i class="menu-title"></i>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default SideBarScreen