import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import NavBarScreen from './subComponent/Navbar'
import SideBarScreen from './subComponent/SideBar'
// import './main.css'

const PlacesScreen = () => {

    // init our states :
    const [data, setData] = useState([])

    // consuming apis :

    // get data from api :
    const getData = async () => {
        fetch("our_api").then((res) => {
            return res.json()
        }).then((data) => {
            // console.log(data)
        })
    }

    // post new data :
    const postData = async () => {
        fetch("our_api", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
            }
        }).then((res) => {
            return res.json()
        }).then((data) => {
            // our callback promise :
        })
    }

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