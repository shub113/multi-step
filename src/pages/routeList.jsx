import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const NoPathFound = lazy(() => import("./noPath"));

const AppLayout = lazy(() => import("./appLayout").then((module) => ({ default: module.AppLayout })));
const Home = lazy(() => import("./home/home").then((module) => ({ default: module.Home })));

export const RouteList = () => (
    <Routes>
        <Route path='/' element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path='*' element={<NoPathFound />} />
        </Route>
    </Routes>
);
