import React from "react";

export interface InputFieldProps {
    filedType: string;
    filedName: string;
    labelName: string;
    handleInput: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
}

export interface UserTypes {
    value: string,
    option_name: string
}

export interface SelectInputFieldProps {
    filedName: string;
    labelName: string;
    options: UserTypes[];
    handleInput: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
}
