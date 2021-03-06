import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import Drop from '../../core/common/dropdowns/drop';
import Card from '../../core/common/elements/card';
import Graph1 from '../../core/common/elements/graph-1';
import Graph2 from '../../core/common/elements/graph-2';
import Graph3 from '../../core/common/elements/graph-3';
import NavBarScreen from './subComponent/Navbar'
import SideBarScreen from './subComponent/SideBar'
// import './main.css'

const DashboardScreen = () => {

    // init states :
    const [data, setData] = useState([])
    // let token = 'our_token'

    // consuming apis :

    // get data from api :
    const getData = async () => {
        fetch("our_api").then((res) => {
            return res.json()
        }).then((data) => {
            // setData(data)
            console.log(data)
        })
    }

    // post new data :
    const postData = async () => {
        fetch("our_api", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json',
                // 'Authorization' : 'Bearer ' + token
            },
            body : JSON.stringify({
                // our body request :
            })
        }).then((res) => {
            return res.json()
        }).then((data) => {
            console.log(data)
        })
    }

    // edit data if need :
    const editData = async () => {
        fetch("our_api").then((res) => {
            return res.json()
        }).then((data) => {
            // our call back function suit to promise :
        })
    }

    // delete item by ID :
    const deleteByID = async (id) => {
        fetch(`our_api/${id}`, {
            method : 'DELETE'
        }).then((res) => {
            return res.json()
        }).then((data) => {
            // u can do any think when data deleted :
        })
    }

    // render functions :
    useEffect(() => {
        // our functions render :
    }, [])

    return (
        <div className="container-scroller">
            <NavBarScreen />
            <div className="container-fluid page-body-wrapper">
                <SideBarScreen />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div class="content-wrapper">
                            <div className="row">
                                <div className="col-md-12 grid-margin">
                                    <div className="row">
                                        <div className="col-12 col-xl-8 mb-4 mb-xl-0">
                                            <h3 className="font-weight-bold">Welcome Naoufal</h3>
                                        </div>
                                        <div className="col-12 col-xl-4">
                                            <div className="justify-content-end d-flex">
                                                <Drop />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Card />
                            <div className="row">
                                <div class="col-md-6 grid-margin stretch-card">
                                    <Graph1 />
                                </div>
                                <div class="col-md-6 grid-margin stretch-card">
                                    <Graph2 />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12 grid-margin stretch-card">
                                    <Graph3 />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardScreen