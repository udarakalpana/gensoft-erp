import React, { useState } from "react";
import EmployeeBasicDetailsForm from "./employeeBasicDetails/EmployeeBasicDetailsForm.tsx";
import EmployeeContactDetails from "./employeeContactDetails/EmployeeContactDetails.tsx";
import {
    ValidFormMapperNumber,
    EmployeeDetailsFromMapperType,
} from "../../../../../../utilities/types/form/UserRegistrationForm/addEmployeeFormTypes";
import EmployeeResidentialDetails from "./employeeResidentialDetails/EmployeeResidentialDetails.tsx";
import {
    EmployeeUserBasicDetailsAttributes,
    EmployeeUserContactDetailsAttributes,
    EmployeeUserResidentialDetailsAttributes,
} from "../../../../../../utilities/form/attributes/EmployeeUserRegisterFormAttributes.ts";
import { EmployeeBasicDetailsFormAttributesTypes } from "../../../../../../utilities/types/form/UserRegistrationForm/employeeBasicDetailsFormTypes";
import { EmployeeContactDetailsFormAttributesTypes } from "../../../../../../utilities/types/form/UserRegistrationForm/employeeContactDetailsFormTypes";
import { EmployeeResidentialDetailsFormAttributeTypes } from "../../../../../../utilities/types/form/UserRegistrationForm/employeeUserResidentialDetailsFormTypes";

const AddEmployeeForm: React.FC = () => {
    const [currentForm, setCurrentForm] = useState<number>(1);
    const [employeeBasicDetails, setEmployeeBasicDetails] =
        useState<EmployeeBasicDetailsFormAttributesTypes>(
            EmployeeUserBasicDetailsAttributes,
        );
    const [employeeContactDetails, setEmployeeContactDetails] =
        useState<EmployeeContactDetailsFormAttributesTypes>(
            EmployeeUserContactDetailsAttributes,
        );
    const [employeeResidentialDetails, setEmployeeResidentialDetails] =
        useState<EmployeeResidentialDetailsFormAttributeTypes>(
            EmployeeUserResidentialDetailsAttributes,
        );

    const handleNextEmployeeDetailsForm = (): void => {
        setCurrentForm((prevState) => prevState + 1);
    };

    const handlePreviousEmployeeDetailsForm = () => {
        setCurrentForm((prevState) => prevState - 1);
    };

    const employeeDetailsFromMapper: EmployeeDetailsFromMapperType = {
        1: (
            <EmployeeBasicDetailsForm
                employeeBasicDetails={employeeBasicDetails}
                setEmployeeBasicDetails={setEmployeeBasicDetails}
                handleNextEmployeeDetailsForm={handleNextEmployeeDetailsForm}
            />
        ),

        2: (
            <EmployeeContactDetails
                employeeContactDetails={employeeContactDetails}
                setEmployeeContactDetails={setEmployeeContactDetails}
                handleNextEmployeeDetailsForm={handleNextEmployeeDetailsForm}
                handlePreviousEmployeeDetailsForm={
                    handlePreviousEmployeeDetailsForm
                }
            />
        ),

        3: (
            <EmployeeResidentialDetails
                employeeResidentialDetails={employeeResidentialDetails}
                setEmployeeResidentialDetails={setEmployeeResidentialDetails}
                handleNextEmployeeDetailsForm={handleNextEmployeeDetailsForm}
                handlePreviousEmployeeDetailsForm={
                    handlePreviousEmployeeDetailsForm
                }
            />
        ),
    };

    const renderEmployeeDetailsForms = () => {
        return employeeDetailsFromMapper[currentForm as ValidFormMapperNumber];
    };

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 mt-14">
                <div className="h-48 mb-4 rounded">
                    {renderEmployeeDetailsForms()}
                </div>
            </div>
        </div>
    );
};

export default AddEmployeeForm;
