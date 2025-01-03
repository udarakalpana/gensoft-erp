import SelectInputField from "../../../../../../common/form/SelectInputField.tsx";
import { category1 } from "../../../../../../../utilities/dynamicValues/userBasicDetailsSelectValues.ts";
import InputField from "../../../../../../common/form/InputField.tsx";
import React from "react";
import { EducationDetailsFormWithStoreDataPropsTypes } from "../../../../../../../utilities/types/form/UserRegistrationForm/employeeEducationDetailsTypes";

const EmployeeEducationDetailsFormWithStoreData: React.FC<
    EducationDetailsFormWithStoreDataPropsTypes
> = ({
    index,
    educationDetailFromStore,
    handleEducationDetailsInputField,
    removeEducationDetailsForm,
}) => {
    return (
        <div
            key={index}
            className="grid grid-cols-3 border-b-2 border-black p-4"
        >
            <div className="mr-4">
                <SelectInputField
                    filedName={`category1_${index}`}
                    labelName="category 1"
                    options={category1}
                    defaultValue={educationDetailFromStore.category1}
                    handleInput={(event) =>
                        handleEducationDetailsInputField(event, index)
                    }
                />
                <InputField
                    filedType="text"
                    filedName={`school1_${index}`}
                    labelName="Name of School 1"
                    defaultValue={educationDetailFromStore.school1}
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
                    defaultValue={educationDetailFromStore.category2}
                    handleInput={(event) =>
                        handleEducationDetailsInputField(event, index)
                    }
                />
                <InputField
                    filedType="text"
                    filedName={`school2_${index}`}
                    labelName="Name of School 2"
                    defaultValue={educationDetailFromStore.school2}
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
    );
};

export default EmployeeEducationDetailsFormWithStoreData;
