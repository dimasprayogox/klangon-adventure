import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Wind, Users } from "lucide-react";

// Data dummy sesuai dengan ERD ReservasiParalayang
const paraglidingRentals = [
  {
    id: "RES-P001",
    nama_pengguna: "Aldeva Rizky W. P. P.",
    nama_paket: "Tandem Fun Fly",
    tanggal_reservasi: "2025-06-25",
    total_harga: 350000,
    status_reservasi: "Menunggu Verifikasi",
    bukti_pembayaran: "/images/bukti.jpg",
  },
  {
    id: "RES-P002",
    nama_pengguna: "Dimas Prayogo",
    nama_paket: "Tandem Adventure",
    tanggal_reservasi: "2025-06-25",
    total_harga: 600000,
    status_reservasi: "Confirmed",
    bukti_pembayaran: "/images/bukti.jpg",
  },
  {
    id: "RES-P003",
    nama_pengguna: "Budi Santoso",
    nama_paket: "Tandem Fun Fly",
    tanggal_reservasi: "2025-06-26",
    total_harga: 350000,
    status_reservasi: "Pembayaran Gagal",
    bukti_pembayaran: null,
  },
];

const ParaglidingManagementPage: React.FC = () => {
  return (
    <div className="flex flex-1 flex-col gap-4">
      {/* Kartu Statistik Paralayang */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Reservasi Hari Ini
            </CardTitle>
            <Wind className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+5 dari kemarin</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Menunggu Verifikasi
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Perlu segera diperiksa
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Penerbangan Berhasil
            </CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Total bulan ini</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Pilot Bertugas
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">
              Pilot aktif hari ini
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabel Manajemen Reservasi Paralayang */}
      <Card>
        <CardHeader>
          <CardTitle>Daftar Reservasi Paralayang</CardTitle>
          <CardDescription>
            Verifikasi pembayaran dan kelola status reservasi penerbangan.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Reservasi</TableHead>
                <TableHead>Wisatawan</TableHead>
                <TableHead>Paket</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paraglidingRentals.map((rental) => (
                <TableRow key={rental.id}>
                  <TableCell className="font-medium">{rental.id}</TableCell>
                  <TableCell>{rental.nama_pengguna}</TableCell>
                  <TableCell>{rental.nama_paket}</TableCell>
                  <TableCell>{rental.tanggal_reservasi}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        rental.status_reservasi === "Confirmed"
                          ? "default"
                          : rental.status_reservasi === "Menunggu Verifikasi"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {rental.status_reservasi}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button
                      variant="outline"
                      size="sm"
                      disabled={
                        rental.status_reservasi !== "Menunggu Verifikasi"
                      }
                    >
                      Verifikasi Pembayaran
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ParaglidingManagementPage;
