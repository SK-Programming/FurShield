import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminMain from "./admin/AdminMain";
import ShelterMain from "./profiles/shelter/shelterMain"
import VetMain from "./profiles/veterinarians/vetMain"
import OwnerMain from "./profiles/owner/ownerMain";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/admin/*" element={<AdminMain />}>
          </Route>

          <Route path="/vet/*" element={<VetMain />}>
          </Route>

          <Route path="/shelter/*" element={<ShelterMain />}>
          </Route>
          <Route path="/owner/*" element={<OwnerMain />}>
          </Route>
        </Routes>

      </BrowserRouter>
      {/* <LoginRegister /> */}
    </>
  );
}

export default App;
