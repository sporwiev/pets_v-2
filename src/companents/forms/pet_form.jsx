import React, {useEffect, useState} from "react";
import NameInput from "../inputs/name_input";
import PhoneInput from "../inputs/phone_input";
import EmailInput from "../inputs/email_input";
import PasswordInput from "../inputs/password_input";
import ConfirmPasswordInput from "../inputs/confirm_password_input";
import PetInputs from "../inputs/pet_inputs";
import CheckboxAgree from "../inputs/checkbox_agree";
import {getUser} from "../getUser";
import {useNavigate} from "react-router-dom";


const AddPetForm = (props) => {
    const navigate = useNavigate();
    let [user, setUser] = useState({name: "", email: "", phone: ""});
    let [pet, setPet] = useState({
        name: '',
        phone: '',
        email: '',
        password: '',
        password_confirmation: '',
        confirm: 1,
        kind: '',
        photos1: '',
        photos2: '',
        photos3: '',
        mark: '',
        description: '',
        district: ''
    });
    useEffect(() => {
        getUser(props.token, setUser,
            (u) => setPet({...pet, name: u.name, phone: u.phone, email: u.email}));
    }, []);

    const changePhoto1Handler = (e) => {
        setPet({...pet, photos1: e.target.files[0]})
    }

    const changePhoto2Handler = (e) => {
        setPet({...pet, photos2: e.target.files[0]})
    }

    const changePhoto3Handler = (e) => {
        setPet({...pet, photos3: e.target.files[0]})
    }

    const onInputChange = e => {
        const {id, value} = e.target;
        setPet(prev => ({
            ...prev,
            [id]: value
        }));
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (pet.password !== pet.password_confirmation) {
            document.getElementById('add_pet_passwords').style.display = 'block';
            return;
        }
        let form = new FormData();
        form.append('name', pet.name);
        form.append('phone', pet.phone);
        form.append('email', pet.email);
        if (pet.password) form.append('password', pet.password);
        if (pet.password_confirmation) form.append('password_confirmation', pet.password_confirmation);
        form.append('kind', pet.kind);
        form.append('photos1', pet.photos1);
        if (pet.photos2) form.append('photos2', pet.photos2);
        if (pet.photos3) form.append('photos3', pet.photos3);
        form.append('mark', pet.mark);
        form.append('description', pet.description);
        form.append('district', pet.district);
        form.append('confirm', '1');

        let hs = new Headers();
        hs.append('Authorization', `Bearer ${props.token}`)
        let requestOptions = {
            method: 'POST',
            body: form,
            headers: hs
        };

        fetch('https://pets.сделай.site/api/pets', requestOptions)
            .then(response => response.json())
            .then(result => {
                navigate(
                    {
                        pathname: `/pet/${result.data.id}`,
                    })
            })
            .catch((error) => console.log('error', error));
    }
    console.log(pet)
    return (
        <div className="p-3">
            <form onSubmit={onSubmitForm} className="w-50 m-auto p-3">
                <NameInput onChange={onInputChange} name={pet.name}/>
                <PhoneInput onChange={onInputChange} phone={pet.phone}/>
                <EmailInput onChange={onInputChange} email={pet.email}/>
                <div className="mb-3 form-check border p-3" hidden={props.token}>
                    <input type="checkbox" className="form-check-input m-3" id="auto-reg"/>
                    <label className="form-check-label m-3" htmlFor="auto-reg">Пройти автоматическую
                        регистрацию</label>
                    <div className="hidden">
                        <PasswordInput onChange={onInputChange} required={false}/>
                        <span id="add_pet_passwords" className="text-danger" style={{display: 'none'}}>
                            Пароли не совпадают</span>
                        <ConfirmPasswordInput onChange={onInputChange}/>
                    </div>
                </div>
                <PetInputs pet={pet} onChange={onInputChange}
                           changeFileHandlers={[changePhoto1Handler, changePhoto2Handler, changePhoto3Handler]}/>
                <CheckboxAgree/>
                <button type="submit" className="btn text-bg-dark p-3">Добавить
                </button>
            </form>
        </div>
    );
}

export default AddPetForm;