import PetInputs from "../inputs/pet_inputs";
import CheckboxAgree from "../inputs/checkbox_agree";
import React, {useEffect, useState} from "react";
import {getPet} from "../getPet";
import {useNavigate} from "react-router-dom";

const EditPetForm = (props) => {
    const navigate = useNavigate();
    const pet_id = props.pet_id
    let [pet, setPet] = useState({data: {pet: {}}});
    let [editedPet, setEditedPet] = useState({
        kind: '',
        photos1: '',
        photos2: '',
        photos3: '',
        mark: '',
        description: '',
        district: '',
        confirm: 1,
    });
    useEffect(() => getPet(pet_id, setPet, callbackPet), [])

    const callbackPet = (result) => {
        const pet = result.data.pet
        setEditedPet({
            ...editedPet, kind: pet.kind, mark: pet.mark, description: pet.description,
            district: pet.district
        })
    }

    const changePhoto1Handler = (e) => {
        setEditedPet({...editedPet, photos1: e.target.files[0]})
    }

    const changePhoto2Handler = (e) => {
        setEditedPet({...editedPet, photos2: e.target.files[0]})
    }

    const changePhoto3Handler = (e) => {
        setEditedPet({...editedPet, photos3: e.target.files[0]})
    }

    const onInputChange = e => {
        const {id, value} = e.target;
        setEditedPet(prev => ({
            ...prev,
            [id]: value
        }));
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        let form = new FormData();
        form.append('kind', editedPet.kind);
        form.append('photos1', editedPet.photos1);
        if (pet.photos2) form.append('photos2', editedPet.photos2);
        if (pet.photos3) form.append('photos3', editedPet.photos3);
        form.append('mark', editedPet.mark);
        form.append('description', editedPet.description);
        form.append('district', editedPet.district);
        form.append('confirm', '1');

        let hs = new Headers();
        hs.append('Authorization', `Bearer ${props.token}`)
        let requestOptions = {
            method: 'POST',
            body: form,
            headers: hs
        };

        fetch(`https://pets.сделай.site/api/pets/${pet_id}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    navigate(
                        {
                            pathname: `/pet/${pet_id}`,
                        })
                } else {
                    console.log(response.json())
                }
            })
            .catch((error) => console.log('error', error));
    }
    console.log(editedPet)
    return (
        <div className="p-3">
            <form onSubmit={onSubmitForm} className="w-50 m-auto border border-primary p-3">
                <PetInputs pet={editedPet} onChange={onInputChange}
                           changeFileHandlers={[changePhoto1Handler, changePhoto2Handler, changePhoto3Handler]}/>
                <CheckboxAgree/>
                <input type="submit" className="btn btn-primary form-control" value="Зарегистрировать"/>
            </form>
        </div>
    );
}

export default EditPetForm;