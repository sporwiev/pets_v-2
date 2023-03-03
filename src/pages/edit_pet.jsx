import React from "react";
import EditPetForm from "../companents/forms/edit_pet_form";
import {useParams} from "react-router-dom";


const EditPet = (props) => {
    const params = useParams();
    const pet_id = params.pet_id;

    return (
        <div>
            <h2 className="text-center text-white bg-primary m-2">Редактирование объявления</h2>
            <EditPetForm token={props.token} pet_id={pet_id}/>
        </div>
    );
}

export default EditPet;