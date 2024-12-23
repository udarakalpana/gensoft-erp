import React, { useEffect, useState } from "react";
import InputField from "../../../../../../common/form/InputField.tsx";
import SelectInputField from "../../../../../../common/form/SelectInputField.tsx";
import {
    bloodTypes,
    maritalTypes,
    userGenderTypes,
    userTitle,
} from "../../../../../../../utilities/dynamicValues/userBasicDetailsSelectValues.ts";
import {
    EmployeeBasicDetailsFormAttributesTypes,
    EmployeeBasicDetailsFormProp
} from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeBasicDetailsFormTypes";
import FormSubmitButton from "../common/FormSubmitButton.tsx";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, AppState } from "../../../../../../../../store.ts";
import {
    addEmployeeBasicDetails,
    clearEmployeeBasicDetails,
} from "../../../../../../../utilities/form/slices/employeeDetailsSlice.ts";
import {
    EmployeeUserBasicDetailsAttributes
} from "../../../../../../../utilities/form/attributes/EmployeeUserRegisterFormAttributes.ts";
const EmployeeBasicDetailsForm: React.FC<EmployeeBasicDetailsFormProp> = ({
    employeeBasicDetails,
    setEmployeeBasicDetails,
    handleNextEmployeeDetailsForm,
}) => {
    const [
        employeeBasicDetailsAlreadyStore,
        setEmployeeBasicDetailsAlreadyStore,
    ] = useState<EmployeeBasicDetailsFormAttributesTypes>(EmployeeUserBasicDetailsAttributes);
    const dispatch = useDispatch<AppDispatch>();
    const useStateValue: TypedUseSelectorHook<AppState> = useSelector;
    const employeeBasicDetailsFromStore = useStateValue(
        (state) => state.erp_store.employeeDetails,
    );

    useEffect(() => {
        setEmployeeBasicDetailsAlreadyStore(
            employeeBasicDetailsFromStore.employeeBasicDetails,
        );
    }, [employeeBasicDetailsFromStore]);
    const handleBasicDetailsInputField = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    ) => {
        const { name, value } = event.target;
        setEmployeeBasicDetails((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleBasicDetailsFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addEmployeeBasicDetails(employeeBasicDetails));
        handleNextEmployeeDetailsForm();
    };

    console.log(employeeBasicDetailsAlreadyStore.title)

    return (
        <form className="w-3/4 m-auto" onSubmit={handleBasicDetailsFormSubmit}>
            <h1 className="text-2xl font-bold mb-4">Employee Basic Details</h1>
            <div className="grid grid-cols-2">
                <div className="mr-4">
                    <SelectInputField
                        filedName="title"
                        labelName="Title"
                        options={userTitle}
                        defaultValue={employeeBasicDetailsAlreadyStore.title}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="initials"
                        labelName="Initials"
                        defaultValue={employeeBasicDetailsAlreadyStore.initials}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="first_name"
                        labelName="First Name"
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.first_name
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="middle_name"
                        labelName="Middle Name"
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.middle_name
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="last_name"
                        labelName="Last Name"
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.last_name
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="nickname"
                        labelName="Nick Name"
                        defaultValue={employeeBasicDetailsAlreadyStore.nickname}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="date"
                        filedName="date_of_birth"
                        labelName="Date of Birth"
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.date_of_birth
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                </div>
                <div>
                    <InputField
                        filedType="text"
                        filedName="place_of_birth"
                        labelName="Place of Birth"
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.place_of_birth
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <SelectInputField
                        filedName="gender"
                        labelName="Gender"
                        options={userGenderTypes}
                        defaultValue={employeeBasicDetailsAlreadyStore.gender}
                        handleInput={handleBasicDetailsInputField}
                    />
                    <SelectInputField
                        filedName="marital_status"
                        labelName="Marital Status"
                        options={maritalTypes}
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.marital_status
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <SelectInputField
                        filedName="blood_type"
                        labelName="Blood Types"
                        options={bloodTypes}
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.blood_type
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="text"
                        filedName="citizenship"
                        labelName="Citizenship"
                        defaultValue={
                            employeeBasicDetailsAlreadyStore.place_of_birth
                        }
                        handleInput={handleBasicDetailsInputField}
                    />
                    <InputField
                        filedType="file"
                        filedName="photo"
                        labelName="Employee Photo"
                        defaultValue={employeeBasicDetailsAlreadyStore.photo}
                        handleInput={handleBasicDetailsInputField}
                    />

                    <div className="grid grid-cols-2">
                        <div>
                            <FormSubmitButton buttonName="Fill Contact Details" />
                        </div>
                        <div className="m-4">
                            <button
                                type="button"
                                className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                                onClick={() =>
                                    dispatch(clearEmployeeBasicDetails())
                                }
                            >
                                Clear Form
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EmployeeBasicDetailsForm;
