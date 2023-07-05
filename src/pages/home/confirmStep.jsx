import { useOutletContext } from "react-router-dom";
import { useQuery } from "react-query";

import { Button, Spinner } from "../../components/index";
import { api } from "../../modules/axios";

export function ConfirmStep({ setShow, previousView }) {
    const { formData } = useOutletContext();

    const { isFetching, isSuccess, data, error, refetch } = useQuery(
        ["submit_form"],
        () => {
            return api.get("https://api.publicapis.org/entries");
        },
        {
            enabled: false,
        }
    );

    const onConfirm = () => {
        refetch();
    };

    return (
        <>
            {isFetching && (
                <div className='flex justify-center py-2'>
                    <Spinner />
                </div>
            )}
            {!!error && <span className='text-red-400'>{error?.message ?? "error"}</span>}
            {isSuccess && <span className='text-green-400'>Successful</span>}
            <div className='px-5 py-2 text-lg font-bold'>Complete details</div>

            <div className='border rounded-lg p-3 overflow-auto flex gap-4'>
                Email : {formData.name}
                <br />
                Password : {formData.password}
                <br />
                Name : {formData.name}
                <br />
                Address : {formData.address}
                <br />
            </div>

            <div className='py-3 flex justify-between'>
                <Button
                    onClick={() => {
                        previousView();
                    }}
                >
                    Back
                </Button>
                <div className='flex gap-2 '>
                    <Button onClick={onConfirm} buttonStyle={"bg-green-500 hover:bg-green-400"}>
                        Confirm
                    </Button>
                    {isSuccess && (
                        <Button
                            onClick={() => {
                                setShow(false);
                            }}
                            buttonStyle={"bg-pink-500 hover:bg-pink-400"}
                        >
                            Close
                        </Button>
                    )}
                </div>
            </div>
        </>
    );
}
