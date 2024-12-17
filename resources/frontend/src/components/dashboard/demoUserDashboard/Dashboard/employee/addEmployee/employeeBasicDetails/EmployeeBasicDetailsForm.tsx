import React from "react";
import InputField from "../../../../../../common/form/InputField.tsx";
import SelectInputField from "../../../../../../common/form/SelectInputField.tsx";
import {
    bloodTypes,
    maritalTypes,
    userGenderTypes,
    userTitle,
} from "../../../../../../../utilities/dynamicValues/userBasicDetailsSelectValues.ts";
import { EmployeeBasicDetailsFormProp } from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeBasicDetailsFormTypes";
import FormSubmitButton from "../common/FormSubmitButton.tsx";
const EmployeeBasicDetailsForm: React.FC<EmployeeBasicDetailsFormProp> = ({
    handleNextEmployeeDetailsForm,
}) => {
    const handleBasicDetailsInputField = () => {};

    const handleBasicDetailsFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleNextEmployeeDetailsForm();
    };
    return (
        <form className="w-3/4 m-auto" onSubmit={handleBasicDetailsFormSubmit}>
            <h1 className="text-2xl font-bold mb-4">Employee Basic Details</h1>
            <div className="grid grid-cols-2">
                <div className="mr-4">
                    <SelectInputField
                        filedName="title"
                        labelName="Title"
                        options={userTitle}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="initials"
                        labelName="Initials"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="first_name"
                        labelName="First Name"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="middle_name"
                        labelName="Middle Name"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="last_name"
                        labelName="Last Name"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="nickname"
                        labelName="Nick Name"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="date"
                        filedName="date_of_birth"
                        labelName="Date of Birth"
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <div>
                    <InputField
                        filedType="text"
                        filedName="place_of_birth"
                        labelName="Place of Birth"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <SelectInputField
                        filedName="gender"
                        labelName="Gender"
                        options={userGenderTypes}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <SelectInputField
                        filedName="marital_status"
                        labelName="Marital Status"
                        options={maritalTypes}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <SelectInputField
                        filedName="blood_type"
                        labelName="Blood Types"
                        options={bloodTypes}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="citizenship"
                        labelName="Citizenship"
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="file"
                        filedName="photo"
                        labelName="Employee Photo"
                        handleInput={handleBasicDetailsInputField}
                    />

                    <FormSubmitButton buttonName="Fill Contact Details" />
                </div>
            </div>
        </form>
    );
};

export default EmployeeBasicDetailsForm;
