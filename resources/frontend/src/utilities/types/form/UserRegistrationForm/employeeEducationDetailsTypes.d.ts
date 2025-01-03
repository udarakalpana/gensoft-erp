import React from "react";

export interface EducationDetailsTypes {
    category1: string;
    school1: string;
    category2: string;
    school2: string;
}

export interface EducationDetailsPropsTypes {
    handlePreviousEmployeeDetailsForm: () => void;
}

export interface EducationDetailsFormPropsTypes {
    educationDetails: EducationDetailsTypes[];
    handleEducationDetailsInputField: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        index: number,
    ) => void;
    removeEducationDetailsForm: (index: number) => void;
    handlePreviousEmployeeDetailsForm: () => void;
}

export interface EducationDetailsFormWithStoreDataPropsTypes {
    index: number;
    educationDetailFromStore: EducationDetailsTypes;
    handleEducationDetailsInputField: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        index: number,
    ) => void;
    removeEducationDetailsForm: (index: number) => void;
}
