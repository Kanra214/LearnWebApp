import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryformatPipe } from '../pipes/categoryformat.pipe';
import { PostsComponent } from './posts/posts.component';
import { FormsModule }   from '@angular/forms';
import { AbstractPipe } from '../pipes/abstract.pipe';
import { GetpostsService } from '../services/getposts.service';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchBarComponent,
    HomepageComponent,
    CategoryformatPipe,
    PostsComponent,
    AbstractPipe,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:"", component: HomepageComponent },
      { path:"posts", component: PostsComponent }

    ]),
  ],
  providers: [
    GetpostsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
