import React from "react";
import { EmployeeBasicDetailsFormAttributesTypes } from "./employeeBasicDetailsFormTypes";

export interface EmployeeContactDetailsFormProp {
    employeeContactDetails: EmployeeContactDetailsFormAttributesTypes;
    setEmployeeContactDetails: React.Dispatch<
        React.SetStateAction<EmployeeContactDetailsFormAttributesTypes>
    >;
    handleNextEmployeeDetailsForm: () => void;
    handlePreviousEmployeeDetailsForm: () => void;
}

export interface EmployeeContactDetailsFormAttributesTypes {
    mobile_number: string;
    telephone_number: string;
    telegram_id: string;
    email_address: string;
    linkedin_account: string;
    personal_website: string;
}
