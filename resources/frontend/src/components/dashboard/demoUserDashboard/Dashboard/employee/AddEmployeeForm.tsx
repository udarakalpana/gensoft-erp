import React from "react";
import EmployeeBasicDetailsForm from "./employeeBasicDetails/EmployeeBasicDetailsForm.tsx";

const AddEmployeeForm: React.FC = () => {
    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 mt-14">
                <div className="h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <EmployeeBasicDetailsForm />
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeForm;
