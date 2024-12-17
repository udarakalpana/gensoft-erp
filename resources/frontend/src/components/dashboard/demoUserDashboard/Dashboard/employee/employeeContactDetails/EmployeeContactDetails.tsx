import React from "react";
import InputField from "../../../../../common/form/InputField.tsx";
import { EmployeeContactDetailsFormProp } from "../../../../../../utilities/types/form/UserRegistrationForm/employeeContactDetailsFormTypes";
const EmployeeContactDetails: React.FC<EmployeeContactDetailsFormProp> = ({
    handleNextEmployeeDetailsForm,
    handlePreviousEmployeeDetailsForm,
}) => {
    const handleBasicDetailsInputField = () => {};

    const handleBasicDetailsFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        handleNextEmployeeDetailsForm();
    };

    return (
        <form className="w-3/4 m-auto" onSubmit={handleBasicDetailsFormSubmit}>
            <h1 className="text-2xl font-bold mb-4">
                Employee Contact Details
            </h1>
            <div className="grid grid-cols-2">
                <div className="mr-4">
                    <InputField
                        filedType="text"
                        filedName="mobile_number"
                        labelName="Mobile Number"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="telephone_number"
                        labelName="Telephone Number"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="telegram_id"
                        labelName="Telegram Number"
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <div>
                    <InputField
                        filedType="text"
                        filedName="email_address"
                        labelName="Email Address"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="linkedin_account"
                        labelName="Linkedin Account"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="personal_website"
                        labelName="Personal Website"
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <button
                    type="button"
                    className="red-btn"
                    onClick={handlePreviousEmployeeDetailsForm}
                >
                    Change Employee Basic Details
                </button>

                <button type="submit" className="dark-btn mt-4">
                    Fill User Residential Details
                </button>
            </div>
        </form>
    );
};

export default EmployeeContactDetails;
