import { Component } from '@angular/core';
import {Taskbar} from '../taskbar/taskbar';
import {Teaching} from '../desktop/windows/teaching/teaching';

@Component({
  selector: 'app-teaching-page',
  imports: [
    Teaching,
    Taskbar
  ],
  templateUrl: './teaching-page.html',
  styleUrl: './teaching-page.css'
})
export class TeachingPage {

}
