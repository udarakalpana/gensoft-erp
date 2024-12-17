import React from "react";
import InputField from "../../../../../common/form/InputField.tsx";
import { EmployeeContactDetailsFormProp } from "../../../../../../utilities/types/form/UserRegistrationForm/employeeContactDetailsFormTypes";

const EmployeeResidentialDetails: React.FC<EmployeeContactDetailsFormProp> = ({
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
                Employee Residential Details
            </h1>
            <div className="grid grid-cols-2">
                <div className="mr-4">
                    <InputField
                        filedType="text"
                        filedName="address_line_1"
                        labelName="Address Line 1"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="address_line_2"
                        labelName="Address Line 2"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="city"
                        labelName="City"
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <div>
                    <InputField
                        filedType="text"
                        filedName="country"
                        labelName="Country"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="postal_code"
                        labelName="Postal Code"
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <button
                    type="button"
                    className="red-btn"
                    onClick={handlePreviousEmployeeDetailsForm}
                >
                    Change Employee Contact Details
                </button>

                <button type="submit" className="dark-btn mt-4">
                    Fill User Government Identification Details
                </button>
            </div>
        </form>
    );
};

export default EmployeeResidentialDetails;
