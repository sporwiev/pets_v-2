import React from "react";

const PhoneInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }
    return (
        <div className="mb-3">
            <label htmlFor="phone" className="form-label">Введите свой телефон:</label>
            <input type="phone" className="form-control" name="phone" id="phone" pattern="\+\d{8,19}"
                   aria-describedby="phoneInputDiv" required value={props.phone}
                   onChange={handleChange} onBlur={props.onBlur && handleOnBlur}/>
            <div id="phoneInputDiv" className="form-text">Используйте цифры, +.</div>
        </div>
    );
}

export default PhoneInput;