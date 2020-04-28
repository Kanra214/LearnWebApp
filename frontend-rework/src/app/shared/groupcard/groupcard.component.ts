import { Component, OnInit, Input } from '@angular/core';
import { Group } from '@models/group';
import { AuthService } from '@services/auth.service';

@Component({
  selector: 'app-groupcard',
  templateUrl: './groupcard.component.html',
  styleUrls: ['./groupcard.component.css']
})
export class GroupcardComponent implements OnInit {
  @Input() group:any;//TODO: change to group interface
  constructor(public authService: AuthService ) { }

  ngOnInit(): void {
  }
  get isInGroup(): boolean{
    return this.group.members.includes(this.authService.currentUser?.email);
  }

}
