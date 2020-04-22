import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
//my modules
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
