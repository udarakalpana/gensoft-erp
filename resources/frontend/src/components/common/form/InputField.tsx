import React from "react";

interface InputFieldProps {
    filedType: string;
    filedName: string;
    labelName: string;
    handleInput: (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => void;
}

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
                className="input-field"
                onChange={handleInput}
                required
            />
        </div>
    );
};

export default InputField;
