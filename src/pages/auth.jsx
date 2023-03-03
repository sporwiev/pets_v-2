import AuthForm from "../companents/forms/auth_form";

const Auth = (props) => {
    return (
        <div>
            <h2 className="fs-1 m-5">Авторизация</h2>
            <AuthForm setToken={props.setToken}/>
        </div>
    );
};

export default Auth;