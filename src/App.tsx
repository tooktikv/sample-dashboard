
import { useState } from "react"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "./components/ui/table"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./components/ui/accordion"
import { Button } from "./components/ui/button"
import { Alert, AlertDescription } from "./components/ui/alert"

type Student = {
  id: string
  name: string
  email: string
  phone: string
  status: "active" | "inactive"
}

const students: Student[] = [
  {
    id: "1",
    name: "Amina Hassan",
    email: "amina@example.com",
    phone: "555-0101",
    status: "active",
  },
  {
    id: "2",
    name: "Ben Carter",
    email: "ben@example.com",
    phone: "555-0102",
    status: "inactive",
  },
  {
    id: "3",
    name: "Chen Wei",
    email: "chen@example.com",
    phone: "555-0103",
    status: "active",
  },
  {
    id: "4",
    name: "Diego Alvarez",
    email: "diego@example.com",
    phone: "555-0104",
    status: "active",
  },
  {
    id: "5",
    name: "Elena Petrova",
    email: "elena@example.com",
    phone: "555-0105",
    status: "inactive",
  },
  {
    id: "6",
    name: "Farah Rahman",
    email: "farah@example.com",
    phone: "555-0106",
    status: "active",
  },
  {
    id: "7",
    name: "Gabriel Santos",
    email: "gabriel@example.com",
    phone: "555-0107",
    status: "active",
  },
  {
    id: "8",
    name: "Hana Kim",
    email: "hana@example.com",
    phone: "555-0108",
    status: "inactive",
  },
  {
    id: "9",
    name: "Ibrahim Diallo",
    email: "ibrahim@example.com",
    phone: "555-0109",
    status: "active",
  },
  {
    id: "10",
    name: "Jade Nguyen",
    email: "jade@example.com",
    phone: "555-0110",
    status: "active",
  },
   {
    id: "11",
    name: "Tooktik Tooktik",
    email: "Tooktik@example.com",
    phone: "555-0111",
    status: "inactive",
  },
]


export function App() {
  const [showAlert, setShowAlert] = useState(false)
  return (
    <div className="flex min-h-svh justify-center p-6">
      <div className="w-full max-w-3xl">
        <h1 className="mb-4 font-medium text-center"> Students </h1>
        <Table>
        <TableHeader>
        <TableRow>
          <TableHead> Name </TableHead>
          <TableHead> Email </TableHead>
          <TableHead> Phone </TableHead>
          <TableHead> Status </TableHead>
        </TableRow>
        </TableHeader>
        <TableCaption> List of Students </TableCaption>
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
    <Accordion>
      <AccordionItem>
        <AccordionTrigger> Students List </AccordionTrigger>
        <AccordionContent>
          <p> Here you can find the list of all students. </p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    <Button onClick={() => setShowAlert(true)}>
      Add Student
    </Button>
    {showAlert && (
      <Alert>
        <AlertDescription>
          Student added successfully.
        </AlertDescription>
      </Alert>
    )}
      </div>
    </div>
  )
}

export default App
