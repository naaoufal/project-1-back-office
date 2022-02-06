import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import EmailInput from '../../core/common/inputs/emailInput'
import PasswordInput from '../../core/common/inputs/passwordInput';
// import './main.css'

const LoginScreen = () => {

    // init states :
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    // consuming api :
    const loginFunction = async () => {
        fetch("our_api", {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({})
        })
    }

    const handleLogin = () => {
        console.log(email, password)
    }

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper">
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                    <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                            <h4>Hello! let's get started</h4>
                            <h6 className="font-weight-light">Sign in to continue.</h6>
                            <form className="pt-3">
                                <div className="form-group">
                                {/* <input type="email" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email" /> */}
                                <input
                                    type="email"
                                    className="form-control form-control-lg"
                                    id="exampleInputEmail1"
                                    placeholder="Email"
                                    onChange={(event) => {setEmail(event.target.value)}}
                                    value={email}
                                />
                                </div>
                                <div className="form-group">
                                <input 
                                    type="password" 
                                    className="form-control form-control-lg"
                                    id="exampleInputPassword1" 
                                    placeholder="Password"
                                    onChange={(event) => {setPassword(event.target.value)}}
                                    value={password} 
                                />
                                </div>
                                <div className="mt-3">
                                <a className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={handleLogin} >SIGN IN</a>
                                </div>
                                <div className="my-2 d-flex justify-content-between align-items-center">
                                </div>
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginScreen