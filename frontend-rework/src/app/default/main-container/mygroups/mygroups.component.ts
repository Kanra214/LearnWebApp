import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GroupService } from '@services/group.service';
import { AccountService } from '@services/account.service';
@Component({
  selector: 'app-mygroups',
  templateUrl: './mygroups.component.html',
  styleUrls: ['./mygroups.component.css'],
  // encapsulation:ViewEncapsulation.None,
})
export class MygroupsComponent implements OnInit {

  constructor(private groupService: GroupService, private accountService: AccountService) {
    // this.groupService.
    // console.log('my groups constructor called')
    this.groupService.getGroups({}, (group) => {
      return group.members.some((member) => {
        return member._id === this.accountService.currentUser._id;
      });
    });
    // this.groupService.search((group) => {
    //   return group.members.some((member) => {
    //     return member._id === this.accountService.currentUser._id;
    //   });
    // })


  }

  ngOnInit(): void {
  }

}
