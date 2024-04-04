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
            <section className="authentication-page-content">
            <AuthenticationForm></AuthenticationForm>
            </section>
            <section className="authentication-page-description-container">
                <div className="authentication-page-description">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis porro eveniet, ipsam atque nihil rem, modi aliquid perferendis quibusdam temporibus eaque consequatur nesciunt, laboriosam aperiam est magni! Porro, tenetur suscipit.</div>
            </section>
        </main>
    )
};

export default Authentification;
