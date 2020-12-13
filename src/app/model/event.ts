export interface Event {
  eventID: number;
  eventName:string;
  description:string;
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
  amount:number;
  registered:number;
  reportURL: string;
  eventStatus: number;
  location:string;
  eventProperty: number;
}
