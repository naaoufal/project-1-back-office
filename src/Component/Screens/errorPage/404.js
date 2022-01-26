import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer, Zoom } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
// import './main.css'

const ErrorScreen404 = () => {
    return (
        <span>Page Not Found</span>
    )
}

export default ErrorScreen404