import {Component} from '@angular/core';
import {SolvedProblems} from './solved-problems/solved-problems';
import {Teaching} from './teaching/teaching';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-overview',
  imports: [
    SolvedProblems,
    Teaching,
    TranslatePipe
  ],
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class Overview {

}
