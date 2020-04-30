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


let components = [GrouplistviewComponent, GroupcardComponent, GroupdetailComponent, UsercardComponent, UserlistComponent, UserprofileComponent, EventFormComponent]
let pipes = [AbstractPipe]
@NgModule({
  declarations: [components,pipes, EventFormComponent, TimeAndDatePickerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, components]
})
export class SharedModule { }
