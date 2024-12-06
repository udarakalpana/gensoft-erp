import React from "react";
import { EmployeeUserRegisterType } from "../../../../../utilities/types/auth/auth";
import InputField from "../../../../common/form/InputField.tsx";
import SelectInputField from "../../../../common/form/SelectInputField.tsx";
import { userTypes } from "../../../../../utilities/dynamicValues/EmployeeTypes.ts";

const AddEmployeeForm: React.FC<EmployeeUserRegisterType> = ({
    handleInput,
    handleSubmit,
}) => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 mt-14">
                <div className="h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <form className="w-3/4 m-auto" onSubmit={handleSubmit}>
                        <InputField
                            filedType="text"
                            filedName="first_name"
                            labelName="First Name"
                            handleInput={handleInput}
                        />
                        <InputField
                            filedType="text"
                            filedName="last_name"
                            labelName="Last Name"
                            handleInput={handleInput}
                        />
                        <InputField
                            filedType="text"
                            filedName="user_name"
                            labelName="User Name"
                            handleInput={handleInput}
                        />
                        <InputField
                            filedType="email"
                            filedName="email"
                            labelName="Email"
                            handleInput={handleInput}
                        />
                        <SelectInputField
                            filedName="role"
                            labelName="User Role"
                            options={userTypes}
                            handleInput={handleInput}
                        />
                        <InputField
                            filedType="password"
                            filedName="password"
                            labelName="Password"
                            handleInput={handleInput}
                        />
                        <InputField
                            filedType="password"
                            filedName="confirm_password"
                            labelName="Confirm Password"
                            handleInput={handleInput}
                        />
                        <button type="submit" className="dark-btn">
                            Register Employee
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeForm;
