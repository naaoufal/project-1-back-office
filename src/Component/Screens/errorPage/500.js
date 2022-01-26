import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import './main.css'

const ErrorScreen500 = () => {
    return (
        <span>Internal Server Error</span>
    )
}

export default ErrorScreen500