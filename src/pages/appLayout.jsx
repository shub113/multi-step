import { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export function AppLayout() {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        const email = localStorage.getItem("email");
        const password = localStorage.getItem("password");
        const name = localStorage.getItem("name");
        const address = localStorage.getItem("address");
        setFormData({ email, password, name, address });
    }, []);

    const onChange = (event) => {
        setFormData((prev) => ({ ...prev, [event.target.name]: event.target.value }));
    };

    return (
        <div className='bg-slate-300 min-h-screen '>
            <Outlet context={{ formData, onChange }} />
        </div>
    );
}
