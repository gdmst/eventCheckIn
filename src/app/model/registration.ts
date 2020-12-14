import { EmployeeUser } from './employee-user';
import { Event } from './event';

export interface Registration {
  registID: number;
  checkInDateTime: string;
  registDateTime: string;
  evt: Event;
  emp: EmployeeUser;
  status: number;
}

