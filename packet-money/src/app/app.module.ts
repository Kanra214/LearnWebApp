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
import { FormsModule }   from '@angular/forms';
import { AbstractPipe } from '../pipes/abstract.pipe';
import { GetpostsService } from '../services/getposts.service';
import { HttpClientModule } from '@angular/common/http'; 
import { ModalComponent } from './modal/modal.component';
import { ModalService } from 'src/services/modal.service';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchBarComponent,
    HomepageComponent,
    CategoryformatPipe,
    PostsComponent,
    AbstractPipe,
    ModalComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"", component: HomepageComponent },
      { path:"posts", component: PostsComponent },

    ]),
  ],
  providers: [
    GetpostsService,
    ModalService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
