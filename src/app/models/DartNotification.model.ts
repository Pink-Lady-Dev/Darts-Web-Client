export class DartNotificationModel {
  id:string;
  throwNumber:number;
  points:number;
  pie:number;
  isDouble:boolean;
  isTriple:boolean;

  constructor(id: string, throwNumber: number, points:number, pie:number, isDouble:boolean, isTriple:boolean) {
    this.id = id;
    this.throwNumber = throwNumber;
    this.points = points;
    this.pie = pie;
    this.isDouble = isDouble;
    this.isTriple = isTriple;
  }
}

