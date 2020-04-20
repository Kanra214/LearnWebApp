import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//layout
import { DefaultComponent } from '../layout/default/default.component';
import { PassportComponent } from '../layout/passport/passport.component';
//components
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreategroupComponent } from './creategroup/creategroup.component';
import { MygroupsComponent } from './mygroups/mygroups.component';
import { UpcommingeventsComponent } from './upcommingevents/upcommingevents.component';

import { LoginComponent } from './passport/login/login.component';
import { SignupComponent } from './passport/signup/signup.component';
//guard
import { SimpleGuard } from './../core/guard/simple.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    component: DefaultComponent,
    children: [
      {path: 'dashboard', component: DashboardComponent},
      {path: 'creategroup', component: CreategroupComponent, canActivate: [SimpleGuard], canActivateChild: [SimpleGuard]},
      {path: 'mygroups', component: MygroupsComponent, canActivate: [SimpleGuard], canActivateChild: [SimpleGuard]},
      {path: 'upcommingevents', component: UpcommingeventsComponent, canActivate: [SimpleGuard], canActivateChild: [SimpleGuard]},
      //TODO:profile view
    ],
    
  },
  //passport
  {
    path: 'passport',
    redirectTo: 'passport/login',
    component: PassportComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},

    ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
