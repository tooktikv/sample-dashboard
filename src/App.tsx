import { useState } from "react"
import { Avatar, AvatarFallback } from "./components/ui/avatar"
import { Badge } from "./components/ui/badge"
import { Button } from "./components/ui/button"
import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Input } from "./components/ui/input"
import { Separator } from "./components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { Tabs, TabsList, TabsTrigger } from "./components/ui/tabs"
import { students } from "./lib/student"

//define the type for status filter
type StatusFilter = "all" | "active" | "inactive"

//กำหนดฟังก์ชันตรวจสอบค่าของ status filter
function isStatusFilter(value: unknown): value is StatusFilter {
  return value === "all" || value === "active" || value === "inactive"
}

//ฟังก์ชันสำหรับดึงตัวอักษรย่อจากชื่อ
function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
}


export function App() {
  //state for search query and status filter
  const [query, setQuery] = useState("") 
  const [status, setStatus] = useState<StatusFilter>("all")

  //count active and inactive students on card display
  const activeCount = students.filter((student) => student.status === "active").length
  const inactiveCount = students.length - activeCount
  
  //define filtered students based on search query and status filter
  const filteredStudents = students.filter((student) => {
    const matchesQuery = student.name.toLowerCase().includes(query.toLowerCase())
    const matchesStatus = status === "all" || student.status === status
    return matchesQuery && matchesStatus
  })

  return (
    <div className="bg-background min-h-svh p-6">
      <div className="mx-auto flex w-full max-w-4xl flex-col gap-6">
        <div> 
          <h1 className="text-2xl font-medium"> Students </h1>
          <p className="text-sm text-muted-foreground"> A small roster you can filter by status or name.</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
        <Card size="sm">
          <CardHeader>
            <CardDescription>Total</CardDescription>
            <CardTitle className="text-2xl">{students.length}</CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
             <CardDescription>Active</CardDescription>
            <CardTitle className="text-2xl">{activeCount}</CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
             <CardDescription>Inactive</CardDescription>
            <CardTitle className="text-2xl">{inactiveCount}</CardTitle>
          </CardHeader>
        </Card>
        </div>

        <Separator />
        
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Tabs
            value={status}
            onValueChange={(value) => {
              if (isStatusFilter(value)) setStatus(value)
            }}
          >
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="flex gap-2">
            <Input 
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search by name"
            placeholder="Search by name" 
            />

            <Button 
            variant="outline"
            onClick={() => setQuery("")}
            disabled={query.length === 0}>
              Clear
            </Button>
          </div>
        </div>
        {filteredStudents.length === 0 ? (
        <p className="text-center text-muted-foreground">No students found.</p> 
        // ? ตรวจสอบว่าจำนวนข้อมูลเท่ากับ 0 หรือไม่ ถ้าใช่จะแสดงข้อความ "ไม่พบนักเรียน"
       // : แสดงตารางข้อมูลนักเรียน ถ้ามีข้อมูล ก็จะแสดงในตาราง
        ) : ( 

          <Table>
        <TableHeader>
        <TableRow>
          <TableHead> Name </TableHead>
          <TableHead> Email </TableHead>
          <TableHead> Phone </TableHead>
          <TableHead> Status </TableHead>
        </TableRow>
        </TableHeader>
        <TableBody>
          {filteredStudents.map((student) => (
            <TableRow key={student.id}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Avatar><AvatarFallback>{initials(student.name)}</AvatarFallback>
                  </Avatar> {student.name}</div></TableCell>
              <TableCell> {student.email} </TableCell>
              <TableCell> {student.phone} </TableCell>
              <TableCell className="capitalize"> <Badge variant="outline"> {student.status} </Badge> </TableCell>
            
            </TableRow>
          ))}
        </TableBody>
    </Table>
        )}
      </div>
    </div>
  )
}

export default App
