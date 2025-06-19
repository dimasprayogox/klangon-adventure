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

const rentals = [
  {
    id: "RES001",
    pengguna: "Aldeva Rizky",
    jenis: "Paralayang",
    tanggal: "2025-06-25",
    total_harga: 350000,
    status_reservasi: "Menunggu Pembayaran",
  },
  {
    id: "SEW001",
    pengguna: "Dimas Prayogo",
    jenis: "Alat Camping",
    tanggal: "2025-06-27",
    total_harga: 75000,
    status_reservasi: "Menunggu Verifikasi",
  },
  {
    id: "RES002",
    pengguna: "Budi Santoso",
    jenis: "Paralayang",
    tanggal: "2025-06-25",
    total_harga: 350000,
    status_reservasi: "Confirmed",
  },
];

const RentalManagementPage: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Manajemen Penyewaan</CardTitle>
        <CardDescription>
          Verifikasi dan kelola semua penyewaan dari wisatawan.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID Sewa</TableHead>
              <TableHead>Pengguna</TableHead>
              <TableHead>Jenis</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Total</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rentals.map((rental) => (
              <TableRow key={rental.id}>
                <TableCell className="font-medium">{rental.id}</TableCell>
                <TableCell>{rental.pengguna}</TableCell>
                <TableCell>{rental.jenis}</TableCell>
                <TableCell>{rental.tanggal}</TableCell>
                <TableCell>Rp {rental.total_harga.toLocaleString()}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      rental.status_reservasi === "Confirmed"
                        ? "default"
                        : rental.status_reservasi === "Menunggu Verifikasi"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {rental.status_reservasi}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm">
                    {rental.status_reservasi === "Menunggu Verifikasi"
                      ? "Verifikasi"
                      : "Lihat Detail"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default RentalManagementPage;
