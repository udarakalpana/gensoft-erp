import React from "react";
import { EmployeeUserRegisterType } from "../../../../../utilities/types/auth/auth";

const AddEmployeeForm: React.FC<EmployeeUserRegisterType> = ({
    handleInput,
    handleSubmit,
}) => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 mt-14">
                <div className="h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <form className="w-3/4 m-auto" onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label
                                htmlFor="first_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                id="first_name"
                                name="first_name"
                                className="input-field"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="last_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                id="last_name"
                                name="last_name"
                                className="input-field"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="user_name"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                User Name
                            </label>
                            <input
                                type="text"
                                id="user_name"
                                name="user_name"
                                className="input-field"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input-field"
                                onChange={handleInput}
                                required
                            />
                        </div>
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
                                <option value='2'>Cashier User</option>
                                <option value='3'>Customer Service</option>
                                <option value='4'>Sales</option>
                                <option value='5'>Management</option>
                            </select>
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="input-field"
                                onChange={handleInput}
                                required
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="confirm-password"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                                Confirm password
                            </label>
                            <input
                                type="password"
                                id="confirm-password"
                                className="input-field"
                            />
                        </div>
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
