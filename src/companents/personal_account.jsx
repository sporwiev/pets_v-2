import React, {useEffect, useState} from "react";
import {getUser} from "./getUser";


const PersonalAccount = (props) => {
    let [user, setUser] = useState({});
    useEffect(() => getUser(props.token, setUser), [])

    return (
        <div>
            <div className="p-3">
                <p className="animal-width300 w-50 fs-2 m-auto">{user.name}</p>
                <div className="animal-width300 d-flex flex-row flex-wrap  m-auto p-3 w-50">

                    <p className="animal-width250 w-50 ">id:</p>
                    <p className="animal-width250 w-50">{user.id}</p>

                    <p className="animal-width250 w-50 ">Телефон:</p>
                    <p className="animal-width250 w-50">{user.phone}</p>

                    <p className="animal-width300 w-50 ">email:</p>
                    <p className="animal-width300 w-50">{user.email}</p>

                    <p className="animal-width300 w-50 ">Дата регистрации:</p>
                    <p className="animal-width300 w-50">{user.registrationDate}</p>

                    <p className="animal-width300 w-50 ">Количество найденных животных:</p>
                    <p className="animal-width300 w-50">{user.countPets}</p>

                    <p className="animal-width300 w-50 ">Количество объявлений:</p>
                    <p className="animal-width300 w-50">{user.countOrder}</p>
                </div>
            </div>
        </div>
    );
};

export default PersonalAccount;