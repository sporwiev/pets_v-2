import React from "react";

const EmailInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }
    return (
        <div className=" row mb-3 mt-5">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label" style={{ width: "100px" }}>Эл. адрес</label>
                <div className="col-sm">
                    <input type="email" className="form-control " name="email" id="email" aria-describedby="emailInput"
                    onChange={handleChange} onBlur={props.onBlur && handleOnBlur} required value={props.email} />
                
                </div>
            <p className="form-text">Введите адрес электронной почты</p>
            </div>
    );
};

export default EmailInput;