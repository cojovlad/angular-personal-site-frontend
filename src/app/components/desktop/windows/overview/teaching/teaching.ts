import {Component} from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-teaching',
  imports: [
    TranslatePipe,
    RouterLink
  ],
  templateUrl: './teaching.html',
  styleUrl: './teaching.css'
})
export class Teaching {

}
