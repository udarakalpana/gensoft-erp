import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeBasicDetailsFormAttributesTypes } from "../../types/form/UserRegistrationForm/employeeBasicDetailsFormTypes";
import { EmployeeContactDetailsFormAttributesTypes } from "../../types/form/UserRegistrationForm/employeeContactDetailsFormTypes";

interface InitialStateTypes {
    employeeBasicDetails: EmployeeBasicDetailsFormAttributesTypes;
    employeeContactDetails: EmployeeContactDetailsFormAttributesTypes;
}

const initialState: InitialStateTypes = {
    employeeBasicDetails: {} as EmployeeBasicDetailsFormAttributesTypes,
    employeeContactDetails: {} as EmployeeContactDetailsFormAttributesTypes,
};

export const employeeDetailsSlice = createSlice({
    name: "employeeDetails",
    initialState,
    reducers: {
        addEmployeeBasicDetails: (
            state,
            action: PayloadAction<EmployeeBasicDetailsFormAttributesTypes>,
        ) => {
            state.employeeBasicDetails = action.payload;
        },
        clearEmployeeBasicDetails: (state) => {
            state.employeeBasicDetails =
                {} as EmployeeBasicDetailsFormAttributesTypes;
        },

        addEmployeeContactDetails: (
            state,
            action: PayloadAction<EmployeeContactDetailsFormAttributesTypes>,
        ) => {
            state.employeeContactDetails = action.payload;
        },
        clearEmployeeContactDetails: (state) => {
            state.employeeContactDetails =
                {} as EmployeeContactDetailsFormAttributesTypes;
        },
    },
});

export const {
    addEmployeeBasicDetails,
    addEmployeeContactDetails,
    clearEmployeeBasicDetails,
    clearEmployeeContactDetails,
} = employeeDetailsSlice.actions;

export default employeeDetailsSlice.reducer;
