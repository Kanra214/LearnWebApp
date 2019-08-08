import { Component, OnInit } from '@angular/core';
import $ from '../../../node_modules/jquery/dist/jquery';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).find('#search-form')[0].reset();
    
  }


}
