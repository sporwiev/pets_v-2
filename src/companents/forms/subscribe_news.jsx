import React, {useEffect, useState} from "react";
import EmailInput from "../inputs/email_input";


const SubscribeForm = () => {
    const [data, setEmail] = useState({'email': ''});

    const onEmailChange = e => {
        const {name, value} = e.target;
        setEmail(prev => ({
            ...prev,
            [name]: value
        }));
    }
    const sendEmail = (e) => {
        e.preventDefault();
        let raw = JSON.stringify({email: data.email});

        let hs = new Headers();
        hs.append('Content-Type', 'application/json')

        let requestOptions = {
            method: 'POST',
            body: raw,
            headers: hs
        };
        fetch(`https://pets.сделай.site/api/subscription`, requestOptions)
            .then(response => {
                const status_code = response.status
                if(status_code === 204) {
                    document.getElementById('subscribe_form').style.display = 'none';
                    document.getElementById('subscribe_success').style.display = 'block';
                } else {
                    document.getElementById('subscribe_error').style.display = 'block';
                }
            })
            .catch(error => console.log('error', error));
    }

    return (
        <div>
            <div id="subscribe_error" className="alert alert-danger mb-3 text-left" role="alert"
                 style={{display: "none"}}>
                Не удалось подписаться на новости
            </div>
            <div id="subscribe_success" className="alert alert-success mb-3 text-left" role="alert"
                 style={{display: "none"}}>
                Вы успешно подписались на новости
            </div>
            <form onSubmit={sendEmail} className=" w-50  p-5" id="subscribe_form">
                <div className="text-left">
                    <EmailInput onChange={onEmailChange} onBlud=""/>
                </div>
                <div className="text-left">
                    <button type="submit" className="btn text-bg-dark m-auto">Подписаться
                    </button>
                </div>
            </form>
        </div>
    );
}


export default SubscribeForm;