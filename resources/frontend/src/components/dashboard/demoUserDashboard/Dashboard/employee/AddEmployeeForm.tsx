import React from "react";
import { EmployeeUserRegisterType } from "../../../../../utilities/types/auth/auth";
import InputField from "../../../../common/form/InputField.tsx";

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
                        <div className="mb-5">
                            <label
                                htmlFor="role"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                User Role
                            </label>
                            <select
                                id="role"
                                name="role"
                                className="input-field"
                                onChange={handleInput}
                            >
                                <option value="2">Cashier User</option>
                                <option value="3">Customer Service</option>
                                <option value="4">Sales</option>
                                <option value="5">Management</option>
                            </select>
                        </div>
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
