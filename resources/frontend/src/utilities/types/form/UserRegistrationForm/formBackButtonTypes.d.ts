import React from "react";

export interface FormBackButtonPropTypes {
    buttonName: string;
    handlePreviousEmployeeDetailsForm: (event: React.FormEvent) => void;
}
