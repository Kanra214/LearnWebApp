import { Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import { GroupService } from '@services/group.service';
import { University } from '@models/university';
import { EventFormComponent } from '@shared/event-form/event-form.component';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css']
})
export class GroupFormComponent implements OnInit {

  @ViewChild(EventFormComponent) eventFormComponent: EventFormComponent;
  @Output() returned = new EventEmitter();
  universities: string[] = Object.values(University);
  capacityOptions = [...Array(this.groupService.maximumCapacity).keys()].map(i => i + 1).slice(1);
  createGroupForm;
  isMyGroups: boolean = this.router.isActive('/mygroups', true)
  
  constructor(private fb: FormBuilder, private groupService: GroupService, private router: Router) { 
    this.createGroupForm = this.fb.group({
      "subject": ['', Validators.required],
      "university": ['', Validators.required],
      "introduction": [],
      "capacity":['', Validators.required],
      "location": [],
    }

  
    );
    //TODO:
    // if(isMyGroups){
    //   this.createGroup.get('subject').setValue
    // }
  }
  
  

  ngOnInit(): void {
  }
  createGroup(){
    let mergedForm = this.createGroupForm.value;
    mergedForm['events'] = this.eventFormComponent.events;
    this.groupService.create(mergedForm).subscribe(result => {
      if(result.status === 200){
        alert("Group is created");
        this.router.navigate(['/mygroups']);
      
      }
    }
    );
    
    
  }
  goBack(){
    console.log('returned emit');
    this.returned.emit();
  }

}
