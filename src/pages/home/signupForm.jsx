import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { TextInput, Button } from "../../components/index";
import { isValidEmail, isObjectEmpty } from "../../helper/helper";

export function SignupForm({ setShow, nextView }) {
    const { formData, onChange } = useOutletContext();
    const [error, setError] = useState({});

    const onNext = () => {
        if (!isValidEmail(formData?.email ?? "")) {
            setError({ email: "Invalid email!" });
            return;
        }
        if ((formData?.password?.length ?? 0) <= 8) {
            setError({ password: "Password must be 8 character or more!" });
            return;
        }

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
                            setError({});
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
                            setError({});
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
