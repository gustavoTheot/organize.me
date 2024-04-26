import { Route, Routes } from "react-router-dom";
import { Register } from "./pages/register";
import { SpredSheet } from "./pages/spreadsheet";

export function Router() {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/spreadSheet" element={<SpredSheet />} />

        </Routes >
    )
}