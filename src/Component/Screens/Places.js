import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import NavBarScreen from './subComponent/Navbar'
import SideBarScreen from './subComponent/SideBar'
// import './main.css'

const PlacesScreen = () => {

    // Our functions will be here :

    return (
        <div class="container-scroller">
            <NavBarScreen />
            <div class="container-fluid page-body-wrapper">
                <SideBarScreen />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div classNameName="col-md-12 grid-margin">
                                <div className="row">
                                    <div className="col-12">
                                    <span className="">Welcome Aamir</span>
                                    <br/>
                                    <span>this is Places Screen</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default PlacesScreen