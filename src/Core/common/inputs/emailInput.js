import { useState } from "react"

const EmailInput = (props) => {

    // init states :
    const [email, setEmail] = useState("")

    const onchange = (event) => {
        if(props.onChange) {
            console.log(event.target.value)
        }
    }

    return (
        <input
        type="email"
        className="form-control form-control-lg"
        id="exampleInputEmail1" 
        placeholder="Email"
        onChange={(event) => {props.onchange(event)}}
        />
    )
}

export default EmailInput