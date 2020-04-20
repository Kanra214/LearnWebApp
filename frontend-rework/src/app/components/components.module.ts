import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchbarComponent } from './dashboard/searchbar/searchbar.component';
import { MainComponent } from './dashboard/main/main.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { MygroupsComponent } from './mygroups/mygroups.component';
import { UpcommingeventsComponent } from './upcommingevents/upcommingevents.component';
import { LoginComponent } from './passport/login/login.component';
import { SignupComponent } from './passport/signup/signup.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [DashboardComponent, SearchbarComponent, MainComponent, CreategroupComponent, MygroupsComponent, UpcommingeventsComponent, LoginComponent, SignupComponent]
@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class ComponentsModule { }
