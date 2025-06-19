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
import { PlusCircle, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const users = [
  {
    id: 1,
    nama_lengkap: "Dimas Prayogo",
    email: "dimas@example.com",
    peran: "Wisatawan",
    status: "Aktif",
  },
  {
    id: 2,
    nama_lengkap: "Aldeva Rizky",
    email: "aldeva@example.com",
    peran: "Wisatawan",
    status: "Aktif",
  },
  {
    id: 3,
    nama_lengkap: "Admin Utama",
    email: "admin@klangon.com",
    peran: "Admin",
    status: "Aktif",
  },
  {
    id: 4,
    nama_lengkap: "Petugas Lapangan 1",
    email: "petugas1@klangon.com",
    peran: "Petugas",
    status: "Nonaktif",
  },
];

const UserManagementPage: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Manajemen Pengguna</CardTitle>
            <CardDescription>
              Tambah, edit, atau hapus data pengguna.
            </CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Tambah Pengguna
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nama Lengkap</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Peran</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="font-medium">
                  {user.nama_lengkap}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.peran}</TableCell>
                <TableCell>
                  <Badge
                    variant={user.status === "Aktif" ? "default" : "secondary"}
                  >
                    {user.status}
                  </Badge>
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

export default UserManagementPage;
