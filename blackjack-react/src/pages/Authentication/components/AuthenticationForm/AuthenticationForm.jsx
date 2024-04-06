import { Form, Link } from "react-router-dom";
import './AuthenticationForm.css'
import AuthenticationInput from "../AuthenticationInput/AuthenticationInput";
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton'
import AuthenticationCheckbox from "../AuthenticationСheckbox/AuthenticationCheckBox";
 
const AuthenticationForm = ({isLogin}) => {
    console.log(isLogin);
    return (
        <Form onSubmit={(e)=>{e.preventDefault()}} method="post" className="authentication-form">
            <h1>{isLogin?"Welcome Back":"Create an account"}</h1>
            <h2>{isLogin?"Ready to play?":"Sign up to play!"}</h2>
            <AuthenticationInput label={"Email"} type={"email"} name={"gfgf"} placeholder="Enter your email" autocomplete="email"/>
            <AuthenticationInput label={"Password"} type={"password"} name={"gfgdfgfgf"} placeholder={isLogin?"Enter your password":"Create your password"} autocomplete={isLogin?"current-password":"new-password"}/>
            <AuthenticationCheckbox label={"Remember me"}/>
            <Link to={"forgot-password"}>Forgot password</Link>
            <AuthenticationButton title={"Sign in →"}/>
            <div className="authentication-form-or-line">or</div>
            {isLogin? <p>You dont have an account yet? <Link to={'?mode=signup'}>Create one here.</Link></p> : <p>You already have an account?<Link to={'?mode=login'}>Log in here.</Link></p>}

        </Form>
  )
};

export default AuthenticationForm;
