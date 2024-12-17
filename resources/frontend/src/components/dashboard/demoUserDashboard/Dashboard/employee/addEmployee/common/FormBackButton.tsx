import React from "react";
import { FormBackButtonPropTypes } from "../../../../../../../utilities/types/form/UserRegistrationForm/formBackButtonTypes";
const FormBackButton: React.FC<FormBackButtonPropTypes> = ({
    buttonName,
    handlePreviousEmployeeDetailsForm,
}) => {
    return (
        <button
            type="button"
            className="red-btn"
            onClick={handlePreviousEmployeeDetailsForm}
        >
            {buttonName}
        </button>
    );
};

export default FormBackButton;
