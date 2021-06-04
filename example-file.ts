import { OutroTipo } from "./example-file-2";

interface AdminRecord {
  studentsPassedEachYear: number[];
}

interface User {
  outroTipo: OutroTipo;
  firstName: string;
  lastName: string;
  username: string;
  emailAddress: string;
}

interface Admin extends User {
  adminRecord: AdminRecord;
}
interface SchoolRecord {
  startDate: string;
  endDate: string;
  isActive: boolean;
  grades: number[];
}

interface Student extends User {
  schoolRecord: SchoolRecord;
}
