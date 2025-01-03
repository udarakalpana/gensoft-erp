import React from "react";
import SelectInputField from "../../../../../../common/form/SelectInputField.tsx";
import { category1 } from "../../../../../../../utilities/dynamicValues/userBasicDetailsSelectValues.ts";
import InputField from "../../../../../../common/form/InputField.tsx";
import { EducationDetailsFormPropsTypes } from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeEducationDetailsTypes";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { AppState } from "../../../../../../../../store.ts";
import EmployeeEducationDetailsFormWithStoreData from "./EmployeeEducationDetailsFormWithStoreData.tsx";

const EmployeeEducationDetailsForm: React.FC<
    EducationDetailsFormPropsTypes
> = ({
    educationDetails,
    handleEducationDetailsInputField,
    removeEducationDetailsForm,
}) => {
    const useStateValue: TypedUseSelectorHook<AppState> = useSelector;
    const employeeEducationDetailsFromStore = useStateValue(
        (state) => state.erp_store.employeeDetails.employeeEducationDetails,
    );

    return employeeEducationDetailsFromStore.length > 0
        ? employeeEducationDetailsFromStore.map((educationDetailFromStore, index) => (
            <EmployeeEducationDetailsFormWithStoreData
                index={index}
                educationDetailFromStore={educationDetailFromStore}
                handleEducationDetailsInputField={handleEducationDetailsInputField}
                removeEducationDetailsForm={removeEducationDetailsForm}
            />
        ))
        : educationDetails.map((educationDetail, index) => (
            <>
                <div
                    key={index}
                    className="grid grid-cols-3 border-b-2 border-black p-4"
                >
                    <div className="mr-4">
                        <SelectInputField
                            filedName={`category1_${index}`}
                            labelName="category 1"
                            options={category1}
                            //defaultValue={employeeBasicDetailsAlreadyStore.title}
                            handleInput={(event) =>
                                handleEducationDetailsInputField(event, index)
                            }
                        />
                        <InputField
                            filedType="text"
                            filedName={`school1_${index}`}
                            labelName="Name of School 1"
                            // defaultValue={
                            //     employeeContactDetailsAlreadyStored.mobile_number
                            // }
                            handleInput={(event) =>
                                handleEducationDetailsInputField(event, index)
                            }
                        />
                    </div>
                    <div>
                        <SelectInputField
                            filedName={`category2_${index}`}
                            labelName="category 2"
                            options={category1}
                            //defaultValue={employeeBasicDetailsAlreadyStore.title}
                            handleInput={(event) =>
                                handleEducationDetailsInputField(event, index)
                            }
                        />
                        <InputField
                            filedType="text"
                            filedName={`school2_${index}`}
                            labelName="Name of School 2"
                            // defaultValue={
                            //     employeeContactDetailsAlreadyStored.mobile_number
                            // }
                            handleInput={(event) =>
                                handleEducationDetailsInputField(event, index)
                            }
                        />
                    </div>
                    <div>
                        <button
                            type="button"
                            onClick={() => removeEducationDetailsForm(index)}
                        >
                            Remove Form
                        </button>
                    </div>
                </div>
            </>
        ));
};

export default EmployeeEducationDetailsForm;
