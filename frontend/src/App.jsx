import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminMain from "./admin/AdminMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/admin/*" element={<AdminMain />}>
        </Route>

        {/* Public / Login routes */}
        <Route path="/login" element={<div>Login Page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
