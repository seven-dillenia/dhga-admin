import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.css']
})
export class CallBackComponent implements OnInit {
  
  error: boolean;

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
 
    // check for error
    // if (this.route.snapshot.fragment.indexOf('error') >= 0) {
    //     this.error=true;
    //     return;
    // }
    this.authService.completeAuthentication();
  }

}
