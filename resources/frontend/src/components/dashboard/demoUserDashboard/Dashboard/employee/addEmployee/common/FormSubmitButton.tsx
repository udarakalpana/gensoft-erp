import React from "react";
import { FormSubmitButtonPropTypes } from "../../../../../../../utilities/types/form/UserRegistrationForm/formSubmitButtonTypes";
const FormSubmitButton: React.FC<FormSubmitButtonPropTypes> = ({
    buttonName,
}) => {
    return (
        <button type="submit" className="dark-btn mt-4">
            {buttonName}
        </button>
    );
};

export default FormSubmitButton;
