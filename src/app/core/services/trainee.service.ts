import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Trainee } from "../interfaces/trainee";


@Injectable({
  providedIn: 'root'
})
export class TraineeService {
  constructor(private _HttpClient: HttpClient) {
  }
  getAllTrainess(): Observable<Trainee[]> {
    return this._HttpClient.get<Trainee[]>('http://localhost:8000/api/Trainees');
  }
  addTrainee(x: Trainee): Observable<Trainee> {
    return this._HttpClient.post<Trainee>('http://localhost:8000/api/Trainees', x);
  }
  
}
