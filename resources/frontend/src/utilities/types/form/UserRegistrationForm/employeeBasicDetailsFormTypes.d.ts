import React from "react";

export interface EmployeeBasicDetailsFormProp {
    employeeBasicDetails: EmployeeBasicDetailsFormAttributesTypes
    setEmployeeBasicDetails: React.Dispatch<React.SetStateAction<EmployeeBasicDetailsFormAttributesTypes>>
    handleNextEmployeeDetailsForm: () => void;
}

export interface EmployeeBasicDetailsFormAttributesTypes {
    title: string;
    initials: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    nickname: string;
    date_of_birth: string;
    place_of_birth: string;
    gender: string;
    marital_status: string;
    blood_type: string;
    citizenship: string;
    photo: string;
}
