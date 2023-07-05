import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NoPathFound() {
    const navigate = useNavigate();

    useEffect(() => {
        // navigate("/");
    }, []);

    return <div className='grid place-items-center'>No matching path</div>;
}
