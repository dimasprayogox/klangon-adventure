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
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  FileDown,
  Calendar as CalendarIcon,
  DollarSign,
  ListCollapse,
} from "lucide-react";

// Data dummy untuk transaksi
const transactions = [
  {
    id: "TRX001",
    tanggal: "2025-06-25",
    pengguna: "Aldeva Rizky",
    jenis: "Paralayang",
    total: 350000,
    status: "Berhasil",
  },
  {
    id: "TRX002",
    tanggal: "2025-06-25",
    pengguna: "Budi Santoso",
    jenis: "Paralayang",
    total: 350000,
    status: "Berhasil",
  },
  {
    id: "TRX003",
    tanggal: "2025-06-26",
    pengguna: "Dimas Prayogo",
    jenis: "Alat Camping",
    total: 75000,
    status: "Berhasil",
  },
  {
    id: "TRX004",
    tanggal: "2025-06-27",
    pengguna: "Citra Lestari",
    jenis: "Paralayang",
    total: 600000,
    status: "Berhasil",
  },
];

// Data dummy untuk chart
const chartData = [
  { date: "2025-06-24", total: 450000 },
  { date: "2025-06-25", total: 700000 },
  { date: "2025-06-26", total: 75000 },
  { date: "2025-06-27", total: 600000 },
  { date: "2025-06-28", total: 950000 },
];

const chartConfig = {
  total: { label: "Pendapatan", color: "hsl(220 84.2% 50.8%)" },
};

const ReportPage: React.FC = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="flex flex-1 flex-col gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Laporan Penyewaan & Pendapatan</CardTitle>
          <CardDescription>
            Filter data berdasarkan rentang tanggal dan jenis, lalu ekspor
            laporan Anda.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {/* Filter Tanggal */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-[280px] justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? (
                    date.toLocaleDateString("id-ID")
                  ) : (
                    <span>Pilih tanggal</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>

            {/* Filter Jenis Layanan */}
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Semua Jenis" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Jenis</SelectItem>
                <SelectItem value="paragliding">Paralayang</SelectItem>
                <SelectItem value="camping">Alat Camping</SelectItem>
              </SelectContent>
            </Select>

            {/* Tombol Ekspor */}
            <div className="ml-auto flex gap-2">
              <Button variant="outline">
                <FileDown className="mr-2 h-4 w-4" /> Ekspor PDF
              </Button>
              <Button>
                <FileDown className="mr-2 h-4 w-4" /> Ekspor Excel
              </Button>
            </div>
          </div>

          {/* Kartu Statistik Laporan */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Pendapatan
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Rp 1.375.000</div>
                <p className="text-xs text-muted-foreground">
                  Periode 24 - 28 Juni 2025
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Transaksi
                </CardTitle>
                <ListCollapse className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4</div>
                <p className="text-xs text-muted-foreground">
                  Transaksi berhasil
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Grafik Pendapatan */}
          <div className="mb-6">
            <CardTitle className="mb-4">Grafik Pendapatan Harian</CardTitle>
            <ChartContainer config={chartConfig} className="h-[250px] w-full">
              <AreaChart data={chartData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="date"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  dataKey="total"
                  type="natural"
                  fill="var(--color-total)"
                  fillOpacity={0.4}
                  stroke="var(--color-total)"
                />
              </AreaChart>
            </ChartContainer>
          </div>

          {/* Tabel Detail Transaksi */}
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID Transaksi</TableHead>
                <TableHead>Tanggal</TableHead>
                <TableHead>Pengguna</TableHead>
                <TableHead>Jenis</TableHead>
                <TableHead>Total</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transactions.map((trx) => (
                <TableRow key={trx.id}>
                  <TableCell className="font-medium">{trx.id}</TableCell>
                  <TableCell>{trx.tanggal}</TableCell>
                  <TableCell>{trx.pengguna}</TableCell>
                  <TableCell>{trx.jenis}</TableCell>
                  <TableCell>Rp {trx.total.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportPage;
