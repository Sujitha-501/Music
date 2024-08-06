import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { LandingComponent } from './core/components/landing/landing.component';

const routes: Routes = [
  { path: '', redirectTo: '/music', pathMatch: 'full' },
  { path: 'music', component: LandingComponent },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'app', component: HomeComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
