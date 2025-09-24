import {Component} from '@angular/core';
import {PersonalInfo} from '../personal-info/personal-info';
import {Teaching} from '../windows/teaching/teaching';
import {SolvedProblems} from '../windows/solved-problems/solved-problems';
import {TranslatePipe} from '@ngx-translate/core';
import {DvdScreenSaver} from './dvd-screen-saver/dvd-screen-saver';

@Component({
  selector: 'app-desktop',
  imports: [
    PersonalInfo,
    Teaching,
    SolvedProblems,
    TranslatePipe,
    DvdScreenSaver,
  ],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {

}
