import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/form";

export function Router() {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
        </Routes >
    )
}