import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryformatPipe } from '../pipes/categoryformat.pipe';
import { PostsComponent } from './posts/posts.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AbstractPipe } from '../pipes/abstract.pipe';
import { GetpostsService } from '../services/getposts.service';
import { HttpClientModule } from '@angular/common/http'; 
import { ModalComponent } from './modal/modal.component';
import { ModalService } from 'src/services/modal.service';
import * as $ from 'jquery';
import { LoginComponent } from './login/login.component';
import { AuthService } from 'src/services/auth.service';
import { CreateStudyGroupComponent } from './create-study-group/create-study-group.component';
import { ValidScheduleDirective } from './valid-schedule.directive';
import { ValidStartTimeDirective } from './valid-start-time.directive';
import { ValidEndTimeDirective } from './valid-end-time.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBarComponent,
    HomepageComponent,
    CreateStudyGroupComponent,
    CategoryformatPipe,
    PostsComponent,
    AbstractPipe,
    ModalComponent,
    LoginComponent,
    ValidScheduleDirective,
    ValidStartTimeDirective,
    ValidEndTimeDirective,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:"", component: HomepageComponent },
      { path:"posts", component: PostsComponent },
      { path:"createstudygroup", component: CreateStudyGroupComponent }

    ]),
  ],
  providers: [
    GetpostsService,
    ModalService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
