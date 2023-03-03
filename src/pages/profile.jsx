import PersonalAccount from "../companents/personal_account";
import ChangeEmailForm from "../companents/forms/change_email";
import ChangePhoneForm from "../companents/forms/change_phone";
import React, {useEffect, useState} from "react";
import Animal from "../companents/animal";

const Profile = (props) => {
    let [card, setCards] = useState({data: {orders: []}});
    useEffect(() => requestCards(card, setCards), []);

    const requestCards = (card, setCards) => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append('Authorization', `Bearer ${props.token}`);
        const requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };

        fetch("https://pets.сделай.site/api/users/orders", requestOptions)
            .then(response => response.json())
            .then(result => {
                setCards(result)
            })
            .catch(error => console.log('error', error));

    };
    console.log(card)
    const cards = card.data.orders.map((pet) => {
        return <Animal token={props.token} data={pet} photos={pet.photos1} edit_hidden=""/>;
    })
    return (
        <div>
            <h2 className="fs-1 p-5">Личный кабинет</h2>
            <PersonalAccount token={props.token}/>
            <h2 className="fs-1 p-5">Изменить адрес электронной почты</h2>
            <ChangeEmailForm token={props.token}/>
            <h2 className="fs-1 p-5">Изменить номер телефона</h2>
            <ChangePhoneForm token={props.token}/>
            <h2 className="fs-1 p-5">Добавленные объявления</h2>
            <div className="d-flex justify-content-center flex-row flex-wrap">
                {cards}
            </div>
        </div>
    );
};

export default Profile;