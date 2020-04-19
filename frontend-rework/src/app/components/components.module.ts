import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchbarComponent } from './dashboard/searchbar/searchbar.component';
import { MainComponent } from './dashboard/main/main.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { MygroupsComponent } from './mygroups/mygroups.component';
import { UpcommingeventsComponent } from './upcommingevents/upcommingevents.component';


@NgModule({
  declarations: [DashboardComponent, SearchbarComponent, MainComponent, CreategroupComponent, MygroupsComponent, UpcommingeventsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule
  ]
})
export class ComponentsModule { }
