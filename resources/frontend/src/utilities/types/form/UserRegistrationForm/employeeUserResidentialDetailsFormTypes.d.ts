import React from "react";

export interface EmployeeResidentialDetailsFormProps {
    employeeResidentialDetails: EmployeeResidentialDetailsFormAttributeTypes,
    setEmployeeResidentialDetails:  React.Dispatch<
        React.SetStateAction<EmployeeResidentialDetailsFormAttributeTypes>
    >;
    handleNextEmployeeDetailsForm: () => void,
    handlePreviousEmployeeDetailsForm : () => void,
}

export interface EmployeeResidentialDetailsFormAttributeTypes {
    address_line_1: string,
    address_line_2: string,
    city: string,
    country: string,
    postal_code: string,
}
