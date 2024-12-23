import React from "react";
import { InputFieldProps } from "../../../utilities/types/form/InputElementTypes";

const InputField: React.FC<InputFieldProps> = ({
    filedType,
    filedName,
    labelName,
    defaultValue,
    handleInput,
}) => {
    const isFileInputField = filedType === "file";

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
                {...(!isFileInputField && {defaultValue: defaultValue || ""})}
                className="form-input_field"
                onChange={handleInput}
            />

            {isFileInputField && defaultValue && (
                <div className='mt-2 text-sm text-gray-600'>{defaultValue}</div>
            )}
        </div>
    );
};

export default InputField;
