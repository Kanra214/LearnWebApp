import { Component, OnInit } from '@angular/core';
import { AccountService } from '@services/account.service';
import { AuthService } from '@services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public accountService: AccountService, public authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  reload(){
    this.router.navigate(['dashboard'])
  .then(() => {
    window.location.reload();
  });
  }

}
