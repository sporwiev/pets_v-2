import React from "react";

const ConfirmPasswordInput = (props) => {
    const handleChange = (e) => {
        props.onChange(e);
    }

    const handleOnBlur = (e) => {
        props.onBlur(e);
    }

    return (
        
            <div className="mb-3 row mt-5">
                <label htmlFor="repeat-password" className="col-sm-2 col-form-label">Повторите Пароль</label>
                <div className="col-sm-10">
                    <input type="password" className="form-control" name="confirmPassword" id="password_confirmation"
                        onChange={handleChange} onBlur={props.onBlur && handleOnBlur} />
                </div>
            </div>

 

    );
}

export default ConfirmPasswordInput;