import { Form } from "react-router-dom";
 
const AuthenticationForm = (props) => {
    return (<>
        <Form method="post" className="auth-form">
            <h1>Login</h1>
            <p>sometext</p>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </Form>
        {/* {isLogin ? "bj" : null} */}
    </>)
};

export default AuthenticationForm;
