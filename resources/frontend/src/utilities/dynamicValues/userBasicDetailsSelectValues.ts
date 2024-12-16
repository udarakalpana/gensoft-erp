import { UserTypes } from "../types/form/InputElementTypes";

export const userTitle: UserTypes[] = [
    { value: "Mr", option_name: "Mr" },
    { value: "Mrs", option_name: "Mrs" },
    { value: "Ms", option_name: "Ms" },
];

export const userGenderTypes: UserTypes[] = [
    { value: "male", option_name: "Male" },
    { value: "female", option_name: "Female" },
];

export const maritalTypes: UserTypes[] = [
    { value: "single", option_name: "Single" },
    { value: "married", option_name: "Married" },
    { value: "divorced", option_name: "Divorced" },
];

export const bloodTypes: UserTypes[] = [
    { value: "A+", option_name: "A+" },
    { value: "A-", option_name: "A-" },
    { value: "B+", option_name: "B+" },
    { value: "A+", option_name: "B-" },
    { value: "O+", option_name: "O+" },
    { value: "O-", option_name: "O-" },
];
