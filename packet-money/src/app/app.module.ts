import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { CategoryformatPipe } from './categoryformat.pipe';
import { PostsComponent } from './posts/posts.component';
import { FormsModule }   from '@angular/forms';
import { AbstractPipe } from './abstract.pipe';

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
    RouterModule.forRoot([
      { path:"", component: HomepageComponent },
      { path:"posts", component: PostsComponent }

    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
