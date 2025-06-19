import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Halaman Utama
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import RentGearPage from "./components/RentGearPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";

// Layout & Halaman Admin
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./components/AdminDashboard";
import UserManagementPage from "./components/admin/UserManagementPage";
import CampingGearPage from "./components/admin/CampingGearPage";
import ParaglidingManagementPage from "./components/admin/ParaglidingManagementPage";
import RentalManagementPage from "./components/admin/RentalManagementPage";
import ReportPage from "./components/admin/ReportPage";

// Layout & Halaman Petugas
import PetugasLayout from "./components/petugas/PetugasLayout";
import PetugasDashboard from "./components/petugas/PetugasDashboard";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Rute untuk Pengguna Umum */}
          <Route path="/" element={<HomePage />} />
          <Route path="/paragliding" element={<BookingPage />} />
          <Route path="/rent-gear" element={<RentGearPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* Rute untuk Admin Dashboard */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="users" element={<UserManagementPage />} />
            <Route path="camping-gear" element={<CampingGearPage />} />
            <Route path="paragliding" element={<ParaglidingManagementPage />} />
            <Route path="rentals" element={<RentalManagementPage />} />
            <Route path="reports" element={<ReportPage />} />
          </Route>

          {/* Rute untuk Petugas Dashboard */}
          <Route path="/petugas" element={<PetugasLayout />}>
            <Route index element={<PetugasDashboard />} />
            {/* Menggunakan kembali komponen halaman dari admin */}
            <Route path="camping-gear" element={<CampingGearPage />} />
            <Route path="paragliding" element={<ParaglidingManagementPage />} />
            <Route path="rentals" element={<RentalManagementPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
