import { Department } from './department';
import { User } from './user';

export interface EmployeeUser {
  empID: number;
  fname: string;
  lname: string;
  email: string;
  dept: Department;
  user: User;
}
