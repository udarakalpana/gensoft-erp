import React from "react";
import AddEmployeeForm from "./AddEmployeeForm.tsx";
const AddEmployee: React.FC = () => {
    // const [isPasswordSame, setIsPasswordSame] = useState<boolean>(false)

    // const handleInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    //     const { name, value } = event.target;
    //
    //     setEmployeeBasicDetails((prevState) => ({
    //         ...prevState,
    //         [name]: value,
    //     }));
    // };

    // const checkPasswordIsSame = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     if (employeeBasicDetails.password === event.target.value) {
    //         setIsPasswordSame(true)
    //         return
    //     }
    //
    //     setIsPasswordSame(false)
    // }

    // const handleSubmit = async (event: React.FormEvent) => {
    //     event.preventDefault();
    //
    //     const createEmployeeResponse =
    //         await createEmployeeUser(employeeBasicDetails);
    // };

    return (
        <AddEmployeeForm />
    );
};

export default AddEmployee;
