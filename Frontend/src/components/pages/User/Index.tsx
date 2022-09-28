import React from "react";
import { Route, Routes } from "react-router-dom";

import UserManage from "./UserManage";

function Index() {
    return (
        <React.Fragment>
            <Routes>
                <Route path="manage" element={<UserManage />} />
            </Routes>
        </React.Fragment >
    );
}

export default Index;