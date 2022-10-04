import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./Add/Add";
function Index() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="add" element={<Add />} />
            </Routes>
        </React.Fragment>
    );
}

export default Index;