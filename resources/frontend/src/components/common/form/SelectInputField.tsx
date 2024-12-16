import React from "react";
import { SelectInputFieldProps } from "../../../utilities/types/form/InputElementTypes";

const SelectInputField: React.FC<SelectInputFieldProps> = ({
    filedName,
    labelName,
    options,
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
            <select
                id={filedName}
                name={filedName}
                className="form-input_field"
                onChange={handleInput}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.option_name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectInputField;
