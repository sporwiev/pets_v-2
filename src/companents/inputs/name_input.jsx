import React from "react";

const NameInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }
    return (
            <div className="mb-3 row mt-5">
                <label htmlFor="Name" className="col-sm-2 col-form-label" >Ваше имя</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" name="name" id="name" pattern="[А-Яа-я]+"
                        aria-describedby="nameInputDiv" onChange={handleChange} onBlur={props.onBlur && handleOnBlur}
                        value={props.name} required />
                </div>
                <div id="nameInputDiv" className="form-text">Используйте кириллические буквы</div>
            </div>
    );
};

export default NameInput;