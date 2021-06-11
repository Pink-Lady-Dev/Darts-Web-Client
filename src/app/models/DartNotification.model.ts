export class DartNotificationModel {
  username:string;
  id:string;
  throwNumber:number;
  points:number;
  pie:number;
  isDouble:boolean;
  isTriple:boolean;
  score:number;

  constructor(username: string, id: string, throwNumber: number, points:number, pie:number, isDouble:boolean, isTriple:boolean, score: number) {
    this.username = username;
    this.id = id;
    this.throwNumber = throwNumber;
    this.points = points;
    this.pie = pie;
    this.isDouble = isDouble;
    this.isTriple = isTriple;
    this.score = score;
  }
}

