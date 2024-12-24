import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeBasicDetailsFormAttributesTypes } from "../../types/form/UserRegistrationForm/employeeBasicDetailsFormTypes";
import { EmployeeContactDetailsFormAttributesTypes } from "../../types/form/UserRegistrationForm/employeeContactDetailsFormTypes";
import { EmployeeResidentialDetailsFormAttributeTypes } from "../../types/form/UserRegistrationForm/employeeUserResidentialDetailsFormTypes";

interface InitialStateTypes {
    employeeBasicDetails: EmployeeBasicDetailsFormAttributesTypes;
    employeeContactDetails: EmployeeContactDetailsFormAttributesTypes;
    employeeResidentialDetails: EmployeeResidentialDetailsFormAttributeTypes;
}

const initialState: InitialStateTypes = {
    employeeBasicDetails: {} as EmployeeBasicDetailsFormAttributesTypes,
    employeeContactDetails: {} as EmployeeContactDetailsFormAttributesTypes,
    employeeResidentialDetails:
        {} as EmployeeResidentialDetailsFormAttributeTypes,
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

        addEmployeeResidentialDetails: (
            state,
            action: PayloadAction<EmployeeResidentialDetailsFormAttributeTypes>,
        ) => {
            state.employeeResidentialDetails = action.payload;
        },
        clearEmployeeResidentialDetails: (state) => {
            state.employeeResidentialDetails =
                {} as EmployeeResidentialDetailsFormAttributeTypes;
        },
    },
});

export const {
    addEmployeeBasicDetails,
    addEmployeeContactDetails,
    addEmployeeResidentialDetails,
    clearEmployeeBasicDetails,
    clearEmployeeContactDetails,
    clearEmployeeResidentialDetails,
} = employeeDetailsSlice.actions;

export default employeeDetailsSlice.reducer;
