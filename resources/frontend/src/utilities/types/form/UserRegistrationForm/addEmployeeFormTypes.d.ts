import {JSX} from "react";

export type ValidFormMapperNumber = 1 | 2 | 3;

export type EmployeeDetailsFromMapperType = {
    [step in ValidFormMapperNumber]: JSX.Element;
};
