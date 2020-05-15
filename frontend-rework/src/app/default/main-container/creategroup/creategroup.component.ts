import { Component, OnInit } from '@angular/core';
import { GroupService } from '@services/group.service';
import { University } from '@models/university';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {
  universities: string[] = Object.values(University);
  capacityOptions = [...Array(this.groupService.maximumCapacity).keys()].map(i => i + 1).slice(1);
  createGroupForm;
  constructor(public groupService: GroupService) { }

  ngOnInit(): void {
  }
  // createGroup(){
  //   this.authService.signup(this.signupForm.value).subscribe(result => {
  //     if(result.status === 200){
  //       alert("You are successfully signed up");
  //       this.router.navigate(['passport/login']);
      
  //     }
  //   }
  //   );
    
    
  // }

}
