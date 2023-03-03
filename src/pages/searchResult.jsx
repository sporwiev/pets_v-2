import React, {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Animal from "../companents/animal";


const SearchResult = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    let [card, setCard] = useState({data: {orders: [], order: []}});
    useEffect(() => requestCards(setCard), []);
    const requestCards = (setCard) => {
        const requestOptions = {
            method: 'GET',
        };
        let url = 'https://pets.сделай.site/api/search'
        if (query.has('query')) {
            url += `?query=${query.get('query')}`
        } else if (query.has('district') && query.has('kind')) {
            url += `/order?district=${query.get('district')}&kind=${query.get('kind')}`
        }

        fetch(url, requestOptions)
            .then(response => response.json())
            .then(result => {
                setCard(result);
            })
            .catch(error => console.log('error', error));
    }
    let cards;
    if (query.has('query')) {
        cards = card.data.order.map((pet) => {
            return <Animal data={pet} photos={pet.photos} edit_hidden={true}/>
        });
    } else {
        cards = card.data.orders.map((pet) => {
            return <Animal data={pet} photos={pet.photos1} edit_hidden={true}/>
        });
    }

    if (cards.length < 1) {
        cards = [<div className="text-left h3">результатов нет</div>]
    }
    return (
        <div>
            <h2 className="fs-1 p-5">Результаты поиска</h2>
            <div className="d-flex justify-content-left p-5 flex-row flex-wrap">
                {cards}
            </div>
        </div>
    );
};

export default SearchResult;