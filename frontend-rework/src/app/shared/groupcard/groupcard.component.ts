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
  showDetail:boolean = false;
  constructor(public authService: AuthService ) { }

  ngOnInit(): void {
  }
  get isInGroup(): boolean{
    return this.group.members.some( (member) => {
      return member._id === this.authService.currentUser?._id
  });}
  toggleDetail(){
    this.showDetail = !this.showDetail;
  }

}
