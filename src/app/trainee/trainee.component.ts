import { Component } from '@angular/core';
import { TraineeService } from '../core/services/trainee.service';
import { Trainee } from '../core/interfaces/trainee';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-trainee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './trainee.component.html',
  styleUrl: './trainee.component.css'
})
export class TraineeComponent {
  trainee = {} as Trainee;
  msg: string = ''
  constructor(private _TraineeService: TraineeService) {
  }
  addTrainee() {
    this._TraineeService.addTrainee(this.trainee).subscribe({
      next: (res) => {
        console.log(res);
      }, error: (err) => {
        console.log(err.error.message);
        this.msg = "Please Enter Valid Data"
      }
    })
  }

}
