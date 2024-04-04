import { Form } from "react-router-dom";
import './AuthenticationForm.css'
import AuthenticationInput from "../AuthenticationInput/AuthenticationInput";
import AuthenticationButton from '../AuthenticationButton/AuthenticationButton'
import AuthenticationCheckbox from "../AuthenticationСheckbox/AuthenticationCheckBox";
 
const AuthenticationForm = ({isLogin}) => {
    return (
        <Form method="post" className="authentication-form">
            <h1>Welcome Back</h1>
            <h2>Ready to play?</h2>
            <AuthenticationInput label={"Email"} type={"email"} placeholder="Enter your email"/>
            <AuthenticationInput label={"Password"} type={"password"} placeholder="Enter your password"/>
            <AuthenticationCheckbox label={"Remember me"}/>
            <AuthenticationButton title={"Sign in →"}/>
        </Form>
  )
};

export default AuthenticationForm;
