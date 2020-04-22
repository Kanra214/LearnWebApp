import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrouplistviewComponent } from './grouplistview/grouplistview.component';
import { GroupcardComponent } from './groupcard/groupcard.component';
import { GroupdetailComponent } from './groupdetail/groupdetail.component';
import { UsercardComponent } from './usercard/usercard.component';
import { UserlistComponent } from './userlist/userlist.component';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [GrouplistviewComponent, GroupcardComponent, GroupdetailComponent, UsercardComponent, UserlistComponent, SchedulerComponent, UserprofileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [CommonModule, FormsModule, ReactiveFormsModule]
})
export class SharedModule { }
