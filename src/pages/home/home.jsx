import { useState } from "react";

import { Button } from "../../components/index";
import { FormModal } from "./form.modal";

export function Home() {
    const [showForm, setShowForm] = useState(false);
    return (
        <div className='grid place-items-center h-screen'>
            {showForm && <FormModal setShow={setShowForm} />}
            <Button
                onClick={() => {
                    setShowForm((prev) => !prev);
                }}
            >
                Open form
            </Button>
        </div>
    );
}
