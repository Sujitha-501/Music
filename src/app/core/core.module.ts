import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LandingComponent } from './components/landing/landing.component';



@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
})
export class CoreModule { }
