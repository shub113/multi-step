import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { TextInput, Button } from "../../components/index";
import { isValidEmail, isObjectEmpty } from "../../helper/helper";

export function SignupForm({ setShow, nextView }) {
    const { formData, onChange } = useOutletContext();
    const [error, setError] = useState({});

    const onNext = () => {
        let err = false;
        if (!isValidEmail(formData?.email ?? "")) {
            err = true;
            setError((prev) => ({ ...prev, email: "Invalid email!" }));
        }
        if ((formData?.password?.length ?? 0) < 8) {
            err = true;
            setError((prev) => ({ ...prev, password: "Password must be 8 character or more!" }));
        }
        if (err) {
            return;
        }
        localStorage.setItem("email", formData.email);
        localStorage.setItem("password", formData.password);

        nextView();
    };

    return (
        <>
            <div className='px-5 py-2 text-lg font-bold'>Sign up</div>
            <div className='border rounded-lg p-3 overflow-auto flex gap-4'>
                <TextInput
                    name='email'
                    errorText={error?.email ?? ""}
                    value={formData?.email ?? ""}
                    onChange={(e) => {
                        onChange(e);
                        if (!isObjectEmpty(error)) {
                            setError((prev) => ({ ...prev, email: "" }));
                        }
                    }}
                    labelText='Email'
                />
                <TextInput
                    name='password'
                    value={formData?.password ?? ""}
                    type='password'
                    onChange={(e) => {
                        onChange(e);
                        if (!isObjectEmpty(error)) {
                            setError((prev) => ({ ...prev, password: "" }));
                        }
                    }}
                    labelText='Password'
                    errorText={error?.password ?? ""}
                />
            </div>
            <div className='py-3 flex justify-between'>
                <Button
                    onClick={() => {
                        setShow(false);
                    }}
                    buttonStyle={"bg-red-500 hover:bg-red-400"}
                >
                    Close
                </Button>
                <Button onClick={onNext} buttonStyle={"bg-green-500 hover:bg-green-400"}>
                    Next
                </Button>
            </div>
        </>
    );
}
