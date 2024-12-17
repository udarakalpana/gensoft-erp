import React from "react";
import { InputFieldProps } from "../../../utilities/types/form/InputElementTypes";

const InputField: React.FC<InputFieldProps> = ({
    filedType,
    filedName,
    labelName,
    handleInput,
}) => {
    return (
        <div className="mb-5">
            <label
                htmlFor={filedName}
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
                {labelName}
            </label>
            <input
                type={filedType}
                id={filedName}
                name={filedName}
                className="form-input_field"
                onChange={handleInput}
            />
        </div>
    );
};

export default InputField;
