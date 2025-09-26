import {Routes} from '@angular/router';
import {TeachingPage} from './components/teaching-page/teaching-page';
import {Desktop} from './components/desktop/desktop';
import {SolvedProblemsPage} from './components/solved-problems-page/solved-problems-page';

export const routes: Routes = [
  {path: '', component: Desktop},
  {path: 'teaching', component: TeachingPage},
  {path: 'solved-problems', component: SolvedProblemsPage},
  {path: '**', redirectTo: ''}
];
