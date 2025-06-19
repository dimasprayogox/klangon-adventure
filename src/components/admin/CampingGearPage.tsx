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
import { PlusCircle, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const gear = [
  {
    id: 1,
    nama_alat: "Tenda Dome (4 org)",
    kategori: "Tenda",
    jumlah_total: 10,
    jumlah_tersedia: 8,
    harga_sewa_per_hari: 50000,
  },
  {
    id: 2,
    nama_alat: "Sleeping Bag Eiger",
    kategori: "Perlengkapan Tidur",
    jumlah_total: 20,
    jumlah_tersedia: 15,
    harga_sewa_per_hari: 15000,
  },
  {
    id: 3,
    nama_alat: "Kompor Portable",
    kategori: "Peralatan Masak",
    jumlah_total: 15,
    jumlah_tersedia: 5,
    harga_sewa_per_hari: 10000,
  },
];

const CampingGearPage: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Manajemen Alat Camping</CardTitle>
            <CardDescription>
              Kelola inventaris alat camping yang tersedia.
            </CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Tambah Alat
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Alat</TableHead>
              <TableHead>Kategori</TableHead>
              <TableHead>Jumlah Total</TableHead>
              <TableHead>Tersedia</TableHead>
              <TableHead>Harga/Hari</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {gear.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium">{item.nama_alat}</TableCell>
                <TableCell>{item.kategori}</TableCell>
                <TableCell>{item.jumlah_total}</TableCell>
                <TableCell>{item.jumlah_tersedia}</TableCell>
                <TableCell>
                  Rp {item.harga_sewa_per_hari.toLocaleString()}
                </TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Edit</DropdownMenuItem>
                      <DropdownMenuItem>Lihat Detail</DropdownMenuItem>
                      <DropdownMenuItem className="text-red-600">
                        Hapus
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default CampingGearPage;
