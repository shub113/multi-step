import { useState } from "react";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    const [formData, setFormData] = useState({});

    const onChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className='bg-slate-300 min-h-screen '>
            <Outlet context={{ formData, onChange }} />
        </div>
    );
}
