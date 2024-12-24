import React from "react";import { useDispatch } from "react-redux";
import {AppAction, AppDispatch} from "../../../../../../../../store.ts";
interface FormClearButtonProps {
    storeClear: AppAction // Need to define proper type definition according to the store.
}

const FormClearButton: React.FC<FormClearButtonProps> = ({ storeClear }) => {
    const dispatch = useDispatch<AppDispatch>();

    return (
        <button
            type="button"
            className="w-full focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
            onClick={() => dispatch(storeClear())}
        >
            Clear Form
        </button>
    );
};

export default FormClearButton;
