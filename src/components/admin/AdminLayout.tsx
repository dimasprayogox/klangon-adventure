import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  Home,
  Users,
  Tent,
  Wind,
  ListCollapse,
  BarChart,
  Mountain,
} from "lucide-react";

// Helper function to conditionally apply CSS classes
const cn = (...classes: (string | boolean)[]) =>
  classes.filter(Boolean).join(" ");

const AdminLayout: React.FC = () => {
  const location = useLocation();

  const navLinks = [
    { to: "/admin", icon: Home, label: "Dashboard" },
    { to: "/admin/users", icon: Users, label: "Pengguna" },
    { to: "/admin/camping-gear", icon: Tent, label: "Alat Camping" },
    { to: "/admin/paragliding", icon: Wind, label: "Paralayang" },
    { to: "/admin/rentals", icon: ListCollapse, label: "Penyewaan" },
    { to: "/admin/reports", icon: BarChart, label: "Laporan" },
  ];

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      {/* Sidebar (Tidak ada perubahan di sini) */}
      <div className="hidden border-r bg-gray-900 text-white md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b border-gray-700 px-4 lg:h-[60px] lg:px-6">
            <Link
              to="/"
              className="flex items-center gap-2 font-semibold text-white"
            >
              <Mountain className="h-6 w-6 text-blue-400" />
              <span className="">Klangon Adventure</span>
            </Link>
          </div>
          <div className="flex-1">
            <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-3 text-gray-300 transition-all hover:bg-gray-800 hover:text-white",
                    (location.pathname === link.to ||
                      (link.to !== "/admin" &&
                        location.pathname.startsWith(link.to))) &&
                      "bg-blue-600 text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Area Konten Utama */}
      <div className="flex flex-col">
        {/* Elemen <main> di bawah ini yang diperbaiki */}
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 overflow-auto">
          {/* Outlet akan merender konten halaman di sini */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
