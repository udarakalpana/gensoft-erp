import React, { useState } from "react";
import { createEmployeeUser } from "../../../../../utilities/api/user/createEmployeeUser.ts";
import AddEmployeeForm from "./AddEmployeeForm.tsx";
import { EmployeeBasicDataTypes } from "../../../../../utilities/types/form/employeeUserRegisterTypes";
import { EmployeeUserRegisterFromAttributes } from "../../../../../utilities/form/EmployeeUserRegisterFormAttributes.ts";

const AddEmployee: React.FC = () => {
    const [employeeBasicDetails, setEmployeeBasicDetails] =
        useState<EmployeeBasicDataTypes>(EmployeeUserRegisterFromAttributes);

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        setEmployeeBasicDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const createEmployeeResponse =
            await createEmployeeUser(employeeBasicDetails);
    };

    return (
        <AddEmployeeForm
            handleInput={handleInput}
            handleSubmit={handleSubmit}
        />
    );
};

export default AddEmployee;
