import { useState } from "react"

const EmailInput = (props) => {

    // init states :
    const [email, setEmail] = useState("")

    console.log(email)

    return (
        <input
        type="email"
        className="form-control form-control-lg" 
        id="exampleInputEmail1" 
        placeholder="Email"
        />
    )
}

export default EmailInput