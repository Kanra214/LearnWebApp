import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrouplistviewComponent } from './grouplistview/grouplistview.component';
import { GroupcardComponent } from './groupcard/groupcard.component';
import { GroupdetailComponent } from './groupdetail/groupdetail.component';
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


let components = [GrouplistviewComponent, GroupcardComponent, GroupdetailComponent, UsercardComponent, UserlistComponent, UserprofileComponent, EventFormComponent, TimeAndDatePickerComponent, ModalComponent]
let pipes = [AbstractPipe]
@NgModule({
  declarations: [...components,...pipes, ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ...components, ...pipes]
})
export class SharedModule { }
