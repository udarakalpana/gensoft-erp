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
    clearEmployeeContactDetails,
} from "../../../../../../../utilities/form/slices/employeeDetailsSlice.ts";
import { EmployeeUserContactDetailsAttributes } from "../../../../../../../utilities/form/attributes/EmployeeUserRegisterFormAttributes.ts";
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
                <FormBackButton
                    buttonName="Change Employee Basic Details"
                    handlePreviousEmployeeDetailsForm={
                        handlePreviousEmployeeDetailsForm
                    }
                />
                <div className="grid grid-cols-2">
                    <div>
                        <FormSubmitButton buttonName="Fill User Residential Details" />
                    </div>
                    <div className="m-4">
                        <button
                            type="button"
                            className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                            onClick={() =>
                                dispatch(clearEmployeeContactDetails())
                            }
                        >
                            Clear Form
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EmployeeContactDetails;
