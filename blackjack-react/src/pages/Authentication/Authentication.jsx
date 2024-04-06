import {
    useSearchParams,
    Link,
} from "react-router-dom";
import './Authentication.css';
import AuthenticationForm from "./components/AuthenticationForm/AuthenticationForm";

const Authentification = (props) => {
    const [searchParams, setSearchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';

    return (
        <main className="authentication-page">
            <AuthenticationForm isLogin={isLogin}></AuthenticationForm>
        </main>
    )
};

export default Authentification;
