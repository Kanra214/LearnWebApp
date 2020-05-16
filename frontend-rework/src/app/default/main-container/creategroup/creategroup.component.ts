import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupService } from '@services/group.service';
import { University } from '@models/university';
import { EventFormComponent } from '@shared/event-form/event-form.component';
import { FormBuilder, Validators, ValidationErrors, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-creategroup',
  templateUrl: './creategroup.component.html',
  styleUrls: ['./creategroup.component.css']
})
export class CreategroupComponent implements OnInit {
  @ViewChild(EventFormComponent) eventFormComponent: EventFormComponent;
  universities: string[] = Object.values(University);
  capacityOptions = [...Array(this.groupService.maximumCapacity).keys()].map(i => i + 1).slice(1);
  createGroupForm;
  constructor(private fb: FormBuilder, private groupService: GroupService, private router: Router) { 
    this.createGroupForm = this.fb.group({
      "subject": ['', Validators.required],
      "university": ['', Validators.required],
      "introduction": [],
      "capacity":['', Validators.required],
    }
  
    );
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

}
