import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Taskbar} from "./components/taskbar/taskbar";
import {Desktop} from "./components/desktop/desktop";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Taskbar, Desktop],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-personal-site-frontend');
}
