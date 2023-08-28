import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AdminLayout from './layouts/Adminlayout'

const Dashboardpages = lazy(() => import("./pages/dashboard/DashboardModule"));
const LoginPage = lazy(() => import("./pages/Login"));
function App() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboardpages />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer />
    </Router>
  );
}

export default App;
