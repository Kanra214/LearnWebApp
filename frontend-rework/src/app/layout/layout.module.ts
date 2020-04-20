import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './default/header/header.component';
import { SidebarComponent } from './default/sidebar/sidebar.component';
import { PassportComponent } from './passport/passport.component';

const components = [DefaultComponent, HeaderComponent, SidebarComponent, PassportComponent]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    
  ],
  exports: [...components]
})
export class LayoutModule { }
