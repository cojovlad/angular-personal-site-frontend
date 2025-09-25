import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-solved-problems',
  imports: [
    TranslatePipe
  ],
  templateUrl: './solved-problems.html',
  styleUrl: './solved-problems.css'
})
export class SolvedProblems {

}
