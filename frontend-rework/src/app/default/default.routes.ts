import { DefaultComponent } from './default.component';
import { DashboardComponent } from './main-container/dashboard/dashboard.component';
import { CreategroupComponent } from './main-container/creategroup/creategroup.component';
import { MygroupsComponent } from './main-container/mygroups/mygroups.component';
import { UpcommingeventsComponent } from './main-container/upcommingevents/upcommingevents.component';
import { SimpleGuard } from './../core/guard/simple.guard';

export const defaultRoutes = [
    {
        path: '', 
        component: DefaultComponent, 
        children:[
            {path: '', redirectTo: 'dashboard'},
            {path: 'dashboard', component: DashboardComponent},
            {path: 'creategroup', component: CreategroupComponent, canActivate: [SimpleGuard], canActivateChild: [SimpleGuard]},
            {path: 'mygroups', component: MygroupsComponent, canActivate: [SimpleGuard], canActivateChild: [SimpleGuard]},
            {path: 'upcommingevents', component: UpcommingeventsComponent, canActivate: [SimpleGuard], canActivateChild: [SimpleGuard]},
        ]
    }
];