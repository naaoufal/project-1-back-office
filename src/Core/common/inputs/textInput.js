import { useState } from "react"

const EmailInput = () => {

    // init states :
    const [email, setEmail] = useState("")

    const onChange = (event) => {
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
        onChange={onChange}
        value={props.value}
        />
    )
}

export default EmailInput