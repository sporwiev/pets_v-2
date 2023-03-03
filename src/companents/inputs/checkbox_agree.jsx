import React from "react";

const CheckboxAgree = () => {
    return (
            <div className="form-check p-3">
                <input type="checkbox" className="form-check-input" id="check" required />
                <label className="form-check-label " htmlFor="flexCheckDefault">Согласие на обработку данных</label>
            </div> 
    );
}

export default CheckboxAgree;