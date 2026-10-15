

import { Card, CardDescription, CardHeader, CardTitle } from "./components/ui/card"
import { Separator } from "./components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { students } from "./lib/student"


export function App() {

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
            <CardTitle className="text-2xl">10</CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
             <CardDescription>Active</CardDescription>
            <CardTitle className="text-2xl">7</CardTitle>
          </CardHeader>
        </Card>
        <Card size="sm">
          <CardHeader>
             <CardDescription>Inactive</CardDescription>
            <CardTitle className="text-2xl">3</CardTitle>
          </CardHeader>
        </Card>
        </div>

        <Separator />
        
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Tabs>
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="inactive">Inactive</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
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
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell> {student.name} </TableCell>
              <TableCell> {student.email} </TableCell>
              <TableCell> {student.phone} </TableCell>
              <TableCell className="capitalize"> {student.status} </TableCell>
            </TableRow>
          ))}
        </TableBody>
    </Table>
      </div>
    </div>
  )
}

export default App
