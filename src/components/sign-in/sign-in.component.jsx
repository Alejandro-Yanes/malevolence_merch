import React  , {useState} from 'react'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import './sign-in.styles.scss'

const SignIn =  () => {
    let [email , setEmail]  = useState("");
    let [password , setPassword] = useState("");

    console.log(email)
    console.log(password)

    const handleSubmit = (event)  => {
        event.preventDefault()

        setEmail("")
        setPassword("")
    }

    const handleChange =  (event)  =>  {
        (event.target.name === "email")  ?
        setEmail(event.target.value) :
        setPassword(event.target.value)
    }

    return(
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            
            <form  onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} handleChange={handleChange} label={'Email'}  required  />
                <FormInput name="password" type="password" value={password}  handleChange={handleChange} label={'Password'}  required  />
                <CustomButton type="submit">Submit Form</CustomButton>
            </form>
        </div>
    )
}

export default SignIn