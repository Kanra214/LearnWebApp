import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {defaultRoutes } from './default.routes';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DefaultComponent } from './default.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { DashboardContentComponent } from './main-container/dashboard/dashboard-content/dashboard-content.component';
import { CreategroupComponent } from './main-container/creategroup/creategroup.component';
import { MygroupsComponent } from './main-container/mygroups/mygroups.component';
import { UpcommingeventsComponent } from './main-container/upcommingevents/upcommingevents.component';
import { SearchbarComponent } from './main-container/dashboard/searchbar/searchbar.component';
import { DashboardComponent } from './main-container/dashboard/dashboard.component';


@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    SidebarComponent,
    MainContainerComponent,
    DashboardComponent,
    CreategroupComponent,
    MygroupsComponent,
    UpcommingeventsComponent,
    SearchbarComponent,
    DashboardContentComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(defaultRoutes),
  ],
  // exports:[RouterModule],
})
export class DefaultModule { }
