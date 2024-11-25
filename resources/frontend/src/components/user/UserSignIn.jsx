import React, { useState } from "react";
import axios from "axios";

const UserSignIn = () => {
    const [userSignInDetails, setUserSignInDetails] = useState({
        user_name: "",
        user_password: "",
    });

    const handleInput = (event) => {
        setUserSignInDetails({
            ...userSignInDetails,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await axios.post(
            "/api/user-sign-in",
            userSignInDetails,
        );

        console.log(response);
    };

    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="user_name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    User Name
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    id="user_name"
                                    onChange={handleInput}
                                    className="input-field"
                                    placeholder="name@company.com"
                                    required=""
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="user_password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="user_password"
                                    id="user_password"
                                    onChange={handleInput}
                                    placeholder="••••••••"
                                    className="input-field"
                                    required=""
                                />
                            </div>
                            {/*<div className="flex items-center justify-between">*/}
                            {/*    <div className="flex items-start">*/}
                            {/*        <div className="flex items-center h-5">*/}
                            {/*            <input id="remember" aria-describedby="remember" type="checkbox"*/}
                            {/*                   className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"*/}
                            {/*                   required=""/>*/}
                            {/*        </div>*/}
                            {/*        <div className="ml-3 text-sm">*/}
                            {/*            <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember*/}
                            {/*                me</label>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    <a href="#"*/}
                            {/*       className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot*/}
                            {/*        password?</a>*/}
                            {/*</div>*/}
                            <button type="submit" className="dark-btn">
                                Sign in
                            </button>
                            {/*<p className="text-sm font-light text-gray-500 dark:text-gray-400">*/}
                            {/*    Don’t have an account yet?{" "}*/}
                            {/*    <a*/}
                            {/*        href="#"*/}
                            {/*        className="font-medium text-primary-600 hover:underline dark:text-primary-500"*/}
                            {/*    >*/}
                            {/*        Sign up*/}
                            {/*    </a>*/}
                            {/*</p>*/}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserSignIn;
