import React, { useEffect, useState } from "react";
import InputField from "../../../../../../common/form/InputField.tsx";
import FormBackButton from "../common/FormBackButton.tsx";
import FormSubmitButton from "../common/FormSubmitButton.tsx";
import {
    EmployeeResidentialDetailsFormAttributeTypes,
    EmployeeResidentialDetailsFormProps,
} from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeUserResidentialDetailsFormTypes";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../../../../../../store.ts";
import { EmployeeUserResidentialDetailsAttributes } from "../../../../../../../utilities/form/attributes/EmployeeUserRegisterFormAttributes.ts";
import {
    addEmployeeResidentialDetails, clearEmployeeBasicDetails,
    clearEmployeeResidentialDetails,
} from "../../../../../../../utilities/form/slices/employeeDetailsSlice.ts";
import FormClearButton from "../common/FormClearButton.tsx";

const EmployeeResidentialDetails: React.FC<
    EmployeeResidentialDetailsFormProps
> = ({
    employeeResidentialDetails,
    setEmployeeResidentialDetails,
    handleNextEmployeeDetailsForm,
    handlePreviousEmployeeDetailsForm,
}) => {
    const [
        employeeResidentialDetailsAlreadyStored,
        setEmployeeResidentialDetailsAlreadyStored,
    ] = useState<EmployeeResidentialDetailsFormAttributeTypes>(
        EmployeeUserResidentialDetailsAttributes,
    );
    const dispatch = useDispatch<AppDispatch>();
    const useStateValue: TypedUseSelectorHook<AppState> = useSelector;
    const employeeResidentialDetailsFromStore = useStateValue(
        (state) => state.erp_store.employeeDetails.employeeResidentialDetails,
    );

    useEffect(() => {
        setEmployeeResidentialDetailsAlreadyStored(
            employeeResidentialDetailsFromStore,
        );
    }, [employeeResidentialDetailsFromStore]);
    const handleBasicDetailsInputField = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;
        setEmployeeResidentialDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleBasicDetailsFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addEmployeeResidentialDetails(employeeResidentialDetails));
        handleNextEmployeeDetailsForm();
    };

    return (
        <form className="w-3/4 m-auto" onSubmit={handleBasicDetailsFormSubmit}>
            <h1 className="text-2xl font-bold mb-4">
                Employee Residential Details
            </h1>
            <div className="grid grid-cols-2">
                <div className="mr-4">
                    <InputField
                        filedType="text"
                        filedName="address_line_1"
                        labelName="Address Line 1"
                        defaultValue={
                            employeeResidentialDetailsAlreadyStored.address_line_1
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="address_line_2"
                        labelName="Address Line 2"
                        defaultValue={
                            employeeResidentialDetailsAlreadyStored.address_line_2
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="city"
                        labelName="City"
                        defaultValue={
                            employeeResidentialDetailsAlreadyStored.city
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <div>
                    <InputField
                        filedType="text"
                        filedName="country"
                        labelName="Country"
                        defaultValue={
                            employeeResidentialDetailsAlreadyStored.country
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="postal_code"
                        labelName="Postal Code"
                        defaultValue={
                            employeeResidentialDetailsAlreadyStored.postal_code
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
            </div>
            <div className="grid grid-cols-3 justify-items-center">
                <div className="m-4">
                    <FormClearButton storeClear={clearEmployeeResidentialDetails} />
                </div>

                <div className="m-4">
                    <FormBackButton
                        buttonName="Change Employee Contact Details"
                        handlePreviousEmployeeDetailsForm={
                            handlePreviousEmployeeDetailsForm
                        }
                    />
                </div>
                <div>
                    <FormSubmitButton buttonName="Fill User Government Identification Details"/>
                </div>
            </div>
        </form>
    );
};

export default EmployeeResidentialDetails;
