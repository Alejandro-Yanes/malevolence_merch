import React  , {useState} from 'react'

const SignIn =  () => {
    let [email , setEmail]  = useState("");
    let [password , setPassword] = useState("");


    const handleSubmit = (event)  => {
        event.preventDefault()

        setEmail("xx")
        setPassword("")
    }

    const handleChange =  (event)  =>  {
        (event.target.name === "email")  ?
        setEmail(event.target.value) :
        setPassword(event.target.value)
    }

    return(
        <div className="sign-in">
            <h2 className="title"></h2>
            <span>Sign in with your email and password</span>
            
            <form  onSubmit={handleSubmit}>
                <input name="email" type="email" value={email} onChange={handleChange}  required  />
                <label>Email</label>
                <input name="password" type="password" value={password}  onChange={handleChange} required  />
                <label>password</label>

                <input type="submit" value="Submit Form"/>
            </form>
        </div>
    )
}

export default SignIn