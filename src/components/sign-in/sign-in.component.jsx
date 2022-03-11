import React  , {useState } from 'react'
import FormInput from '../form-input/form-input.component.jsx'
import CustomButton from '../custom-button/custom-button.component.jsx'
import { signInWithGoogle , addUser , auth} from '../../firebase/firebase.utils.js'
import './sign-in.styles.scss'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'




const SignIn =  ({currentUser}) => {
    let [info , setInfo]  = useState({ email : '' , password : ''});

    const { email , password } = info

    const navigate = useNavigate()


    const handleSubmit = async (event)  => {
        event.preventDefault()

       signInWithEmailAndPassword(auth , email , password)
            .then((userCredential) => {
                const user = userCredential.user
                setInfo({
                    email: '',
                    password: ''
                })
                 navigate('/')
            })
            .catch((error) => {
                console.error(error)
            })

       
        
    }

    const handleChange =  (event)  =>  {
        const { name , value } = event.target
        setInfo({
            ...info,
            [name] : value 
        })
    }

    return(
        <div className="sign-in">
            <h2 className="title">I already have an account</h2>
            <span>Sign in with your email and password</span>
            
            <form  onSubmit={handleSubmit}>
                <FormInput name="email" type="email" value={email} handleChange={handleChange} label={'Email'}  required  />
                <FormInput name="password" type="password" value={password}  handleChange={handleChange} label={'Password'}  required  />
                <div className="buttons-flex">
                    <CustomButton >Sign in</CustomButton>
                    <CustomButton onClick={() => signInWithGoogle(navigate)} isGoogleSignIn >Sign in with google</CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn