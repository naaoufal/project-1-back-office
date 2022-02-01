import { useState } from "react"

const EmailInput = (props) => {

    const onChange = (event) => {
        if(props.onChange) {
            console.log(event.target.value)
            props.onChange(event.target.value)
        }
    }

    return (
        <input
        type="email" 
        className="form-control form-control-lg" 
        id="exampleInputEmail1" 
        placeholder="Email"
        value={props.value}
        onChange={onChange}
        />
    )
}

export default EmailInput