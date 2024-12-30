import React, { useState } from "react";
import EmployeeEducationDetailsForm from "./EmployeeEducationDetailsForm.tsx";
import {
    EducationDetailsTypes
} from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeEducationDetailsTypes";

const EmployeeEducationDetails: React.FC = () => {
    const [educationDetails, setEducationDetails] = useState<EducationDetailsTypes[]>([
        {
            category1: "",
            school1: "",
            category2: "",
            school2: "",
        },
    ]);

    const handleEducationDetailsInputField = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        index: number,
    ) => {
        const { name, value } = event.target;

        const filedName: string = getPropertyNameFromFieldName(name);

        const educationDetailsCopy = [...educationDetails];
        educationDetailsCopy[index][filedName] = value;

    };



    const getPropertyNameFromFieldName = (name: string) => {
        return name.split("_").slice(0, 1).join("_");
    }

    const addNewEducationDetailsForm = () => {
        setEducationDetails((prevState) => [
            ...prevState,
            {
                category1: "",
                school1: "",
                category2: "",
                school2: "",
            },
        ]);
    };

    return (
        <form className="w-3/4 m-auto">
            <h1 className="text-2xl font-bold mb-4">
                Employee Education Details
            </h1>
            <button type="button" onClick={addNewEducationDetailsForm}>
                +
            </button>
            <EmployeeEducationDetailsForm
                educationDetails={educationDetails}
                handleEducationDetailsInputField={handleEducationDetailsInputField}
            />
        </form>
    );
};

export default EmployeeEducationDetails;
