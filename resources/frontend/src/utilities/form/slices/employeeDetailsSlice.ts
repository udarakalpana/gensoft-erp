import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeBasicDetailsFormAttributesTypes } from "../../types/form/UserRegistrationForm/employeeBasicDetailsFormTypes";
import { EmployeeContactDetailsFormAttributesTypes } from "../../types/form/UserRegistrationForm/employeeContactDetailsFormTypes";
import { EmployeeResidentialDetailsFormAttributeTypes } from "../../types/form/UserRegistrationForm/employeeUserResidentialDetailsFormTypes";
import {EducationDetailsTypes} from "../../types/form/UserRegistrationForm/employeeEducationDetailsTypes";

interface InitialStateTypes {
    employeeBasicDetails: EmployeeBasicDetailsFormAttributesTypes;
    employeeContactDetails: EmployeeContactDetailsFormAttributesTypes;
    employeeResidentialDetails: EmployeeResidentialDetailsFormAttributeTypes;
    employeeEducationDetails: EducationDetailsTypes[];
}

const initialState: InitialStateTypes = {
    employeeBasicDetails: {} as EmployeeBasicDetailsFormAttributesTypes,
    employeeContactDetails: {} as EmployeeContactDetailsFormAttributesTypes,
    employeeResidentialDetails:
        {} as EmployeeResidentialDetailsFormAttributeTypes,
    employeeEducationDetails: [] as EducationDetailsTypes[],
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

        addEmployeeEducationDetails: (
            state,
            action: PayloadAction<EducationDetailsTypes[]>,
        ) => {
            state.employeeEducationDetails = action.payload;
        },
        clearEmployeeEducationDetails: (state) => {
            state.employeeEducationDetails = [] as EducationDetailsTypes[];
        },
    },
});

export const {
    addEmployeeBasicDetails,
    addEmployeeContactDetails,
    addEmployeeResidentialDetails,
    addEmployeeEducationDetails,
    clearEmployeeBasicDetails,
    clearEmployeeContactDetails,
    clearEmployeeResidentialDetails,
    clearEmployeeEducationDetails,
} = employeeDetailsSlice.actions;

export default employeeDetailsSlice.reducer;
