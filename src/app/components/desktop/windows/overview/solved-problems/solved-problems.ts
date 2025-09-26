import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-solved-problems',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './solved-problems.html',
  styleUrl: './solved-problems.css'
})
export class SolvedProblems {

}
