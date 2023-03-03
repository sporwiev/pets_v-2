import React from "react";
import AddPetForm from "../companents/forms/pet_form";


const AddPet = (props) => {
    return (
        <div>
            <h2 className="fs-1 p-5">Добавление нового объявления</h2>
            <AddPetForm token={props.token}/>
        </div>
    );
}

export default AddPet;