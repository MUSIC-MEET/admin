import Loading from "components/common/Loading";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import UserManage from "./UserManage/UserManage";

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