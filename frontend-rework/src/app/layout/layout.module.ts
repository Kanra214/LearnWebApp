import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutDefaultComponent } from './layout-default/layout-default.component';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PassportComponent } from './passport/passport.component';


@NgModule({
  declarations: [LayoutDefaultComponent, DefaultComponent, HeaderComponent, SidebarComponent, PassportComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule
  ]
})
export class LayoutModule { }
