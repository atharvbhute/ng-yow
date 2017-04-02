import { Component, OnInit } from '@angular/core';
import { Auth } from "app/services/auth.service";

@Component({
  selector: 'app-main-profile',
  templateUrl: './main-profile.component.html',
  styleUrls: ['./main-profile.component.css']
})
export class MainProfileComponent implements OnInit {

  profile:any;
  id_token:any;

  constructor(private auth:Auth) {
    this.profile = JSON.parse(localStorage.getItem('profile'));
    this.id_token = localStorage.getItem('id_token');    
    
   }

  ngOnInit() {
  }

}
