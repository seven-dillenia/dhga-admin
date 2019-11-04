import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ComplaintsService } from '../complaints.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public authService: AuthService, private complaintsService: ComplaintsService) { }

  ngOnInit() {
  }

  login(){
    // this.spinner.show();
    this.authService.login();
  }

  request(){
    this.complaintsService.GetComplaints().subscribe(complaints => {
      console.log(complaints);
    })
  }

  Logout(){
    this.authService.Logout();
  }

}
