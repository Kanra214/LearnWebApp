import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {defaultRoutes } from './default.routes';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DefaultComponent } from './default.component';
import { DashboardContentComponent } from './main-container/dashboard/dashboard-content/dashboard-content.component';
import { CreategroupComponent } from './main-container/creategroup/creategroup.component';
import { MygroupsComponent } from './main-container/mygroups/mygroups.component';
import { UpcommingeventsComponent } from './main-container/upcommingevents/upcommingevents.component';
import { SearchbarComponent } from './main-container/dashboard/searchbar/searchbar.component';
import { DashboardComponent } from './main-container/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MessagelistComponent } from './header/messagelist/messagelist.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    DashboardComponent,
    CreategroupComponent,
    MygroupsComponent,
    UpcommingeventsComponent,
    SearchbarComponent,
    DashboardContentComponent,
    MessagelistComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(defaultRoutes),
  ],
  // exports:[RouterModule],
})
export class DefaultModule { }
