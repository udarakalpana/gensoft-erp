import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeBasicDetailsFormAttributesTypes } from "../../types/form/UserRegistrationForm/employeeBasicDetailsFormTypes";

interface InitialStateTypes {
    employeeBasicDetails: EmployeeBasicDetailsFormAttributesTypes;
}

const initialState: InitialStateTypes = {
    employeeBasicDetails: {} as EmployeeBasicDetailsFormAttributesTypes,
};

export const employeeDetailsSlice = createSlice({
    name: "employeeDetails",
    initialState,
    reducers: {
        addEmployeeBasicDetails: (
            state,
            action: PayloadAction<EmployeeBasicDetailsFormAttributesTypes>,
        ) => {
            state.employeeBasicDetails = action.payload
        },
    },
});

export const { addEmployeeBasicDetails } = employeeDetailsSlice.actions;

export default employeeDetailsSlice.reducer

