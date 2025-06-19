import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

// Data dummy untuk jadwal hari ini
const todaySchedules = [
  {
    time: "09:00",
    activity: "Paralayang Tandem",
    user: "Aldeva Rizky",
    status: "Confirmed",
  },
  {
    time: "11:00",
    activity: "Paralayang Tandem",
    user: "Budi Santoso",
    status: "Confirmed",
  },
  {
    time: "14:00",
    activity: "Paralayang Adventure",
    user: "Citra Lestari",
    status: "Confirmed",
  },
];

// Data dummy untuk status alat
const gearStatus = [
  { name: "Tenda Dome (4 org)", id: "TD01", status: "Perlu Dicek" },
  { name: "Kompor Portable", id: "KP05", status: "Rusak Ringan" },
  { name: "Sleeping Bag Eiger", id: "SB11", status: "Hilang" },
];

const PetugasDashboard: React.FC = () => {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl font-bold">Dashboard Petugas</h1>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Jadwal Kegiatan Hari Ini</CardTitle>
            <CardDescription>
              Daftar penyewaan yang perlu dilayani hari ini.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Waktu</TableHead>
                  <TableHead>Aktivitas</TableHead>
                  <TableHead>Pengguna</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {todaySchedules.map((schedule) => (
                  <TableRow key={schedule.time}>
                    <TableCell className="font-medium">
                      {schedule.time}
                    </TableCell>
                    <TableCell>{schedule.activity}</TableCell>
                    <TableCell>{schedule.user}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Status Alat Perlu Perhatian</CardTitle>
            <CardDescription>
              Alat yang perlu diperbarui statusnya setelah kembali.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Nama Alat</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {gearStatus.map((gear) => (
                  <TableRow key={gear.id}>
                    <TableCell>{gear.name}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          gear.status === "Hilang" ? "destructive" : "secondary"
                        }
                      >
                        {gear.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PetugasDashboard;
