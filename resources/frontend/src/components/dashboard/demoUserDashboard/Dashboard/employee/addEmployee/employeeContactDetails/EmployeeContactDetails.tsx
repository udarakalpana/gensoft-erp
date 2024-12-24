import React, { useEffect, useState } from "react";
import InputField from "../../../../../../common/form/InputField.tsx";
import {
    EmployeeContactDetailsFormAttributesTypes,
    EmployeeContactDetailsFormProp,
} from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeContactDetailsFormTypes";
import FormSubmitButton from "../common/FormSubmitButton.tsx";
import FormBackButton from "../common/FormBackButton.tsx";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../../../../../../store.ts";
import {
    addEmployeeContactDetails,
    clearEmployeeContactDetails
} from "../../../../../../../utilities/form/slices/employeeDetailsSlice.ts";
import { EmployeeUserContactDetailsAttributes } from "../../../../../../../utilities/form/attributes/EmployeeUserRegisterFormAttributes.ts";
import FormClearButton from "../common/FormClearButton.tsx";
const EmployeeContactDetails: React.FC<EmployeeContactDetailsFormProp> = ({
    employeeContactDetails,
    setEmployeeContactDetails,
    handleNextEmployeeDetailsForm,
    handlePreviousEmployeeDetailsForm,
}) => {
    const [
        employeeContactDetailsAlreadyStored,
        setEmployeeContactDetailsAlreadyStored,
    ] = useState<EmployeeContactDetailsFormAttributesTypes>(
        EmployeeUserContactDetailsAttributes,
    );
    const dispatch = useDispatch<AppDispatch>();
    const useStateValue: TypedUseSelectorHook<AppState> = useSelector;
    const employeeContactDetailsFromStore = useStateValue(
        (state) => state.erp_store.employeeDetails.employeeContactDetails,
    );

    useEffect(() => {
        setEmployeeContactDetailsAlreadyStored(employeeContactDetailsFromStore);
    }, [employeeContactDetailsFromStore]);

    const handleBasicDetailsInputField = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;
        setEmployeeContactDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleBasicDetailsFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addEmployeeContactDetails(employeeContactDetails));
        handleNextEmployeeDetailsForm();
    };

    return (
        <form className="w-3/4 m-auto" onSubmit={handleBasicDetailsFormSubmit}>
            <h1 className="text-2xl font-bold mb-4">
                Employee Contact Details
            </h1>
            <div className="grid grid-cols-2">
                <div className="mr-4">
                    <InputField
                        filedType="text"
                        filedName="mobile_number"
                        labelName="Mobile Number"
                        defaultValue={
                            employeeContactDetailsAlreadyStored.mobile_number
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="telephone_number"
                        labelName="Telephone Number"
                        defaultValue={
                            employeeContactDetailsAlreadyStored.telephone_number
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="telegram_id"
                        labelName="Telegram Number"
                        defaultValue={
                            employeeContactDetailsAlreadyStored.telegram_id
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <div>
                    <InputField
                        filedType="text"
                        filedName="email_address"
                        labelName="Email Address"
                        defaultValue={
                            employeeContactDetailsAlreadyStored.email_address
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="linkedin_account"
                        labelName="Linkedin Account"
                        defaultValue={
                            employeeContactDetailsAlreadyStored.linkedin_account
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="personal_website"
                        labelName="Personal Website"
                        defaultValue={
                            employeeContactDetailsAlreadyStored.personal_website
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
            </div>

            <div className="grid grid-cols-3 justify-items-center">
                <div className="m-4">
                    <FormBackButton
                        buttonName="Employee Basic Details"
                        handlePreviousEmployeeDetailsForm={
                            handlePreviousEmployeeDetailsForm
                        }
                    />
                </div>
                <div>
                    <FormSubmitButton buttonName="Fill User Residential Details" />
                </div>
                <div className="m-4">
                    <FormClearButton storeClear={clearEmployeeContactDetails} />
                </div>
            </div>
        </form>
    );
};

export default EmployeeContactDetails;
