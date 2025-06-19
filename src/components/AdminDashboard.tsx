import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  DollarSign,
  Package,
  Users,
  ArrowUpRight,
  FileText,
  Settings,
  Activity,
} from "lucide-react";

const AdminDashboard: React.FC = () => {
  // Data dummy untuk chart dan tabel, sesuaikan dengan data dari backend Anda
  const chartData = [
    { date: "Senin", total: Math.floor(Math.random() * 1000) + 500 },
    { date: "Selasa", total: Math.floor(Math.random() * 1000) + 500 },
    { date: "Rabu", total: Math.floor(Math.random() * 1000) + 500 },
    { date: "Kamis", total: Math.floor(Math.random() * 1000) + 500 },
    { date: "Jumat", total: Math.floor(Math.random() * 1000) + 500 },
    { date: "Sabtu", total: Math.floor(Math.random() * 1000) + 500 },
    { date: "Minggu", total: Math.floor(Math.random() * 1000) + 500 },
  ];

  const chartConfig = {
    total: {
      label: "Pendapatan",
      color: "#2563eb",
    },
  };

  const recentRentals = [
    {
      id: "TRX001",
      user: "Aldeva Rizky",
      item: "Paralayang Tandem",
      status: "Perlu Verifikasi",
    },
    {
      id: "TRX002",
      user: "Dimas Prayogo",
      item: "Tenda Camping (2 org)",
      status: "Terkonfirmasi",
    },
    {
      id: "TRX003",
      user: "Budi Santoso",
      item: "Sleeping Bag",
      status: "Perlu Verifikasi",
    },
    {
      id: "TRX004",
      user: "Citra Lestari",
      item: "Paralayang Tandem",
      status: "Selesai",
    },
    {
      id: "TRX005",
      user: "Dewi Anggraini",
      item: "Kompor Portable",
      status: "Perlu Verifikasi",
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col bg-gray-100 dark:bg-gray-900">
      <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 dark:bg-gray-950">
        <h1 className="text-2xl font-bold">Dashboard Admin</h1>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="outline" size="sm">
            <FileText className="h-4 w-4 mr-2" />
            Buat Laporan
          </Button>
          <Button size="sm">
            <Settings className="h-4 w-4 mr-2" />
            Pengaturan
          </Button>
        </div>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        {/* Kartu Statistik Utama  */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Pendapatan Hari Ini
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Rp 4.523.100</div>
              <p className="text-xs text-muted-foreground">
                +20.1% dari kemarin
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Penyewaan Baru
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">+12</div>
              <p className="text-xs text-muted-foreground">Perlu verifikasi </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Wisatawan Aktif
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">235</div>
              <p className="text-xs text-muted-foreground">
                +180.1% dari bulan lalu
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Stok Alat Kritis
              </CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">
                Item dengan stok menipis{" "}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {/* Grafik Penyewaan  */}
          <Card className="xl:col-span-2">
            <CardHeader>
              <CardTitle>Tren Penyewaan 7 Hari Terakhir</CardTitle>
            </CardHeader>
            <CardContent>
              <ChartContainer config={chartConfig} className="h-[300px] w-full">
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `Rp ${Number(value) / 1000}k`}
                  />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Bar dataKey="total" fill="var(--color-total)" radius={4} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Tabel Penyewaan Terbaru  */}
          <Card>
            <CardHeader>
              <CardTitle>Penyewaan Terbaru</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Wisatawan</TableHead>
                    <TableHead className="text-right">Status</TableHead>
                    <TableHead className="text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentRentals.map((rental) => (
                    <TableRow key={rental.id}>
                      <TableCell>
                        <div className="font-medium">{rental.user}</div>
                        <div className="hidden text-sm text-muted-foreground md:inline">
                          {rental.item}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Badge
                          variant={
                            rental.status === "Perlu Verifikasi"
                              ? "destructive"
                              : "default"
                          }
                        >
                          {rental.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button asChild variant="outline" size="sm">
                          <Link to={`/admin/rentals/${rental.id}`}>Lihat</Link>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
