import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrouplistviewComponent } from './grouplistview/grouplistview.component';
import { GroupcardComponent } from './groupcard/groupcard.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbstractPipe } from './pipes/abstract.pipe';
import { EventFormComponent } from './event-form/event-form.component';
import { TimeAndDatePickerComponent } from './time-and-date-picker/time-and-date-picker.component';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { JwPaginationComponent } from './jw-pagination/jw-pagination.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
 
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true
};


let components = [GrouplistviewComponent, GroupcardComponent, UsercardComponent, UserlistComponent, UserprofileComponent, EventFormComponent, TimeAndDatePickerComponent, ModalComponent, JwPaginationComponent]
let pipes = [AbstractPipe]
@NgModule({
  declarations: [...components,...pipes, JwPaginationComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    PerfectScrollbarModule,
    
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ...components, ...pipes],
  entryComponents: [TimeAndDatePickerComponent],//create group is dynamic and Ivy is disabled so we need to specify this component in entryComponent array
})
export class SharedModule { }
