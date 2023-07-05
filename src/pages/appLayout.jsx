import { Outlet } from "react-router-dom";

export function AppLayout() {
    return (
        <div className='bg-slate-300 min-h-screen '>
            <Outlet />
        </div>
    );
}
