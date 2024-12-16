import React from "react";
import InputField from "../../../../../common/form/InputField.tsx";
import SelectInputField from "../../../../../common/form/SelectInputField.tsx";
import {
    bloodTypes,
    maritalTypes,
    userGenderTypes,
    userTitle
} from "../../../../../../utilities/dynamicValues/userBasicDetailsSelectValues.ts";

const EmployeeBasicDetailsForm: React.FC = () => {
    const handleBasicDetailsInputField = () => {};

    const handleBasicDetailsFormSubmit = () => {};
    return (
        <form className="w-3/4 m-auto" onSubmit={handleBasicDetailsFormSubmit}>
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
            <button type="submit" className="dark-btn">
                Fill User Contact Details
            </button>
        </form>
    );
};

export default EmployeeBasicDetailsForm;
