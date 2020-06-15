import { Component, OnInit, ViewChild, Output, EventEmitter, Input, AfterViewChecked, ChangeDetectorRef, AfterViewInit} from '@angular/core';
import { GroupService } from '@services/group.service';
import { University } from '@models/university';
import { EventFormComponent } from '@shared/event-form/event-form.component';
import { FormBuilder, Validators, FormControl, ValidationErrors} from '@angular/forms';
import { Router } from '@angular/router';
import { ɵELEMENT_PROBE_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
// import { EventOverlapService } from '@services/event-overlap.service';
@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.css'],
  // providers: [EventOverlapService],
})
export class GroupFormComponent implements OnInit, AfterViewChecked, AfterViewInit {
  @Input() group:any;
  @ViewChild(EventFormComponent) eventFormComponent: EventFormComponent;
  @Output() returned = new EventEmitter();
  universities: string[] = Object.values(University);
  capacityOptions = [...Array(this.groupService.maximumCapacity).keys()].map(i => i + 1).slice(1);
  createGroupForm;
  isMyGroups: boolean = this.router.isActive('/mygroups', true)
  
  constructor(private fb: FormBuilder, private groupService: GroupService, private router: Router, private changeDetector: ChangeDetectorRef) { 
    this.createGroupForm = this.fb.group({
      "subject": ['', Validators.required],
      "university": ['', [Validators.required]],
      "introduction": [],
      "capacity":['', [Validators.required, this.lessThanMembersIfIsMyGroups.bind(this)]],
      "location": [],
    }
  

  
    );

  }
  ngAfterViewChecked():void {
    this.changeDetector.detectChanges();
  }
  ngAfterViewInit():void {
    if(this.isMyGroups){
      this.createGroupForm.get('subject').setValue(this.group.subject);
      this.createGroupForm.get('university').setValue(this.group.university);
      this.createGroupForm.get('introduction').setValue(this.group.introduction);
      this.createGroupForm.get('capacity').setValue(this.group.capacity);
      this.createGroupForm.get('location').setValue(this.group.location);

    }
  }
  lessThanMembersIfIsMyGroups(capacityControl: FormControl): ValidationErrors | null{
    if(this.isMyGroups){
      if(this.group?.members.length > capacityControl.value){
      return {isMore: true}
    }
    }
    else{
      return null;
    }
    

  }
  
  

  ngOnInit(): void {

    
  }

  createOrUpdateGroup(){
    let mergedForm = this.createGroupForm.value;
    mergedForm['events'] = this.eventFormComponent.events;
    
    if(!this.isMyGroups){
    this.groupService.create(mergedForm).subscribe(result => {
      if(result.status === 200){
        alert("Group is created");
        
        this.router.navigate(['/mygroups']);
      
      }
    }
    );
  }
  else{
    for(let key of Object.keys(this.group)){
      if( !Object.keys(mergedForm).includes(key)){
        mergedForm[key] = this.group[key];
      }
    // }
    // console.log('new group', mergedForm);
    
  }
  this.groupService.update(mergedForm).subscribe(result => {
    if(result.status === 200){
      alert("Group is saved");
      
      window.location.reload();
    }
  }
  );
    
  }
 
  // showForm(){
  //   console.log(this.eventFormComponent.valid);
  // }

}
goBack(){
  this.returned.emit();
}
}
