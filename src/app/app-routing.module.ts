import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { wildcardRoute } from './shared/wildcardRoute';
import { ClassicComponent } from './forms/classic/classic.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  {
    path: 'forms',
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'classic' },
      { path: 'classic', component: ClassicComponent }
    ]
  },
  wildcardRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
