export type Student = {
  id: string
  name: string
  email: string
  phone: string
  status: "active" | "inactive"
}

export const students: Student[] = [
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
]