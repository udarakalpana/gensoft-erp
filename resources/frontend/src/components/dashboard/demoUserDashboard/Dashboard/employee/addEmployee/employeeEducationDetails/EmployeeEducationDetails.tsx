import React, { useState } from "react";
import EmployeeEducationDetailsForm from "./EmployeeEducationDetailsForm.tsx";
import {
    EducationDetailsPropsTypes,
    EducationDetailsTypes
} from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeEducationDetailsTypes";
import {
    addEmployeeEducationDetails,
    clearEmployeeEducationDetails,
} from "../../../../../../../utilities/form/slices/employeeDetailsSlice.ts";
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
import {AppDispatch, AppState} from "../../../../../../../../store.ts";
import FormClearButton from "../common/FormClearButton.tsx";
import FormBackButton from "../common/FormBackButton.tsx";
import FormSubmitButton from "../common/FormSubmitButton.tsx";
import axios from "axios";

const EmployeeEducationDetails: React.FC<EducationDetailsPropsTypes> = ({
    handlePreviousEmployeeDetailsForm,
}) => {
    const [educationDetails, setEducationDetails] = useState<
        EducationDetailsTypes[]
    >([
        {
            category1: "",
            school1: "",
            category2: "",
            school2: "",
        },
    ]);
    const dispatch = useDispatch<AppDispatch>();
    const useStateValue: TypedUseSelectorHook<AppState> = useSelector;
    const allEmployeeDetails = useStateValue((state) => state.erp_store.employeeDetails)

    const handleEducationDetailsInputField = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
        index: number,
    ) => {
        const { name, value } = event.target;

        const filedName: string = getPropertyNameFromFieldName(name);

        const educationDetailsCopy = [...educationDetails];
        educationDetailsCopy[index][filedName] = value;
    };

    const getPropertyNameFromFieldName = (name: string) => {
        return name.split("_").slice(0, 1).join("_");
    };

    const addNewEducationDetailsForm = () => {
        setEducationDetails((prevState) => [
            ...prevState,
            {
                category1: "",
                school1: "",
                category2: "",
                school2: "",
            },
        ]);
    };

    const removeEducationDetailsForm = (index: number) => {
        educationDetails.splice(index, 1);
        setEducationDetails([...educationDetails]);
    };

    const handleBasicDetailsFormSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        dispatch(addEmployeeEducationDetails(educationDetails));

        handleEmployeeDetailsSubmit()
    };

    const handleEmployeeDetailsSubmit = async () => {
        console.log({allEmployeeDetails})

        // endpoint calling
        await axios.post('api/user-register', allEmployeeDetails, {
            headers: {
                'content-Type': 'multipart/form-data',
            }
        })

    }

    return (
        <form className="w-3/4 m-auto" onSubmit={handleBasicDetailsFormSubmit}>
            <h1 className="text-2xl font-bold mb-4">
                Employee Education Details
            </h1>
            <button type="button" onClick={addNewEducationDetailsForm}>
                +
            </button>
            <EmployeeEducationDetailsForm
                educationDetails={educationDetails}
                handleEducationDetailsInputField={
                    handleEducationDetailsInputField
                }
                removeEducationDetailsForm={removeEducationDetailsForm}
                handlePreviousEmployeeDetailsForm={
                    handlePreviousEmployeeDetailsForm
                }
            />
            <div className="grid grid-cols-3 justify-items-center">
                <div className="m-4">
                    <FormClearButton
                        storeClear={clearEmployeeEducationDetails}
                    />
                </div>

                <div className="m-4">
                    <FormBackButton
                        buttonName="Change Employee Residential Details"
                        handlePreviousEmployeeDetailsForm={
                            handlePreviousEmployeeDetailsForm
                        }
                    />
                </div>
                <div>
                    <FormSubmitButton buttonName="Fill User Government Identification Details" />
                </div>
            </div>
        </form>
    );
};

export default EmployeeEducationDetails;
