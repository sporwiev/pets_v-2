import React, {useState} from "react";
import EmailInput from "../inputs/email_input";

const ChangeEmailForm = (props) => {
    const [email, setEmail] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        let hs = new Headers();
        hs.append('Content-Type', 'application/json')
        hs.append('Authorization', `Bearer ${props.token}`)
        const requestOptions = {
            method: 'PATCH',
            headers: hs,
            body: JSON.stringify({email: email})
        };
        await fetch('https://pets.сделай.site/api/users/email', requestOptions)
            .then(response => {
                if(response.status === 200) {
                    document.getElementById('change-email-form').style.display = 'none';
                    document.getElementById('change-email-success').style.display = 'block';
                    setTimeout(() => {window.location.reload()}, 3000);
                } else {
                    document.getElementById('change-email-error').style.display = 'block';
                }
            }).catch(error => console.log('error', error));
    }
    return (
        <div>
            <div id="change-email-error" className="alert alert-danger mb-3 text-center" role="alert"
                 style={{display: "none"}}>
                Не удалось изменить почту
            </div>
            <div id="change-email-success" className="alert alert-success mb-3 text-center" role="alert"
                 style={{display: "none"}}>
                Вы успешно изменили почту
            </div>
            <form id="change-email-form" onSubmit={onSubmit} className="animal-width300 w-50 m-auto p-3">
                <div className="mb-3 text-left">
                    <EmailInput onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="text-left">
                    <button className="btn text-bg-dark"
                        type="submit">Отправить
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChangeEmailForm;