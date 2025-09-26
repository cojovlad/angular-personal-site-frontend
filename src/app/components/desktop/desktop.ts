import {Component} from '@angular/core';
import {PersonalInfo} from './personal-info/personal-info';
import {TranslatePipe} from '@ngx-translate/core';
import {DvdScreenSaver} from './dvd-screen-saver/dvd-screen-saver';
import {TeachingPage} from '../teaching-page/teaching-page';
import {Teaching} from './windows/overview/teaching/teaching';
import {SolvedProblems} from './windows/overview/solved-problems/solved-problems';
import {Overview} from './windows/overview/overview';

@Component({
  selector: 'app-desktop',
  imports: [
    PersonalInfo,
    DvdScreenSaver,
    Overview,
  ],
  templateUrl: './desktop.html',
  styleUrl: './desktop.css'
})
export class Desktop {

}
