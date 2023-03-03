import { Link } from "react-router-dom";
import React from "react";

const Animal = (props) => {
    const data = props.data
    const deletePet = async () => {
        let hs = new Headers();
        hs.append('Content-Type', 'application/json')
        hs.append('Authorization', `Bearer ${props.token}`)
        const requestOptions = {
            method: 'DELETE',
            headers: hs
        };
        await fetch(`https://pets.сделай.site/api/users/orders/${data.id}`, requestOptions)
            .then(response => {
                if (response.status === 200) {
                    window.location.reload();
                } else {
                    alert('Невозможно удалить')
                }
            }).catch(error => console.log('error', error));
    }

    return (
        <div
            className="card mb-3 p-4" style={{ maxWidth: "1240px" }}>
            <div className="row g-0">
                <div className="col-md-4">
                    <Link className='text-center' to={`/pet/${data.id}`}><img src={'https://pets.сделай.site' + props.photos} className="img-fluid rounded-start " alt="рисунок животного" /></Link>
                </div>
                <div className="col-md-4">
                    <div className="row g-0 p-2">
                        <p className=" mt-2 text-left w-50 ">id: {data.id}</p>

                    </div>
                    <div className="row g-0 p-2">
                        <p className=" text-left w-50 ">Вид животного: {data.kind}</p>
                    </div>
                    <div className="row g-0">
                        <p className=" text-center w-50 ">Дата: {data.date}</p>
                    </div>
                    <div className="row g-0 p-2">
                        <p className=" text-center w-50 ">Номер чипа: {data.mark}</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="row g-0 p-2">
                        <p className=" text-left w-50 ">Район: {data.district}</p>
                    </div>
                    <div className="row g-0 p-2">
                       
                        <p className=" text-left w-50 ">Описание: {data.description}</p>
                    </div>
                </div>
            </div>
            <div className="btn animal-width300 text-left" >
                <div className="btn text-left" >
                    <button onClick={deletePet} className="btn text-bg-dark me-2"
                        hidden={props.edit_hidden}>Удалить
                    </button>
                    <Link to={`/edit_pet/${data.id}`} className="btn text-bg-dark"
                        hidden={props.edit_hidden}>Редактировать
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default Animal;