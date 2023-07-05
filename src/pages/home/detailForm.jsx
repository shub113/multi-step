import { useState } from "react";
import { useOutletContext } from "react-router-dom";

import { TextInput, Button } from "../../components/index";
import { isValidName, isObjectEmpty } from "../../helper/helper";

export function DetailForm({ previousView, nextView }) {
    const { formData, onChange } = useOutletContext();
    const [error, setError] = useState({});

    const onNext = () => {
        let err = false;
        if (!isValidName(formData?.name ?? "")) {
            err = true;
            setError((prev) => ({ ...prev, name: "Please add first-name & last-name, space seprated" }));
        }
        if ((formData?.address ?? "") === "") {
            err = true;
            setError((prev) => ({ ...prev, address: "Address cannot be empty!" }));
        }
        if (err) {
            return;
        }

        nextView();
    };

    return (
        <>
            <div className='px-5 py-2 text-lg font-bold'>Enter details</div>
            <div className='border rounded-lg p-3 overflow-auto flex gap-4'>
                <TextInput
                    name='name'
                    errorText={error?.name ?? ""}
                    value={formData?.name ?? ""}
                    onChange={(e) => {
                        onChange(e);
                        if (!isObjectEmpty(error)) {
                            setError((prev) => ({ ...prev, name: "" }));
                        }
                    }}
                    labelText='Name'
                />
                <TextInput
                    name='address'
                    value={formData?.address ?? ""}
                    onChange={(e) => {
                        onChange(e);
                        if (!isObjectEmpty(error)) {
                            setError((prev) => ({ ...prev, address: "" }));
                        }
                    }}
                    labelText='Address'
                    errorText={error?.address ?? ""}
                />
            </div>
            <div className='py-3 flex justify-between'>
                <Button
                    onClick={() => {
                        previousView();
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
