import { Component, OnInit } from '@angular/core';
import { Auth } from "app/services/auth.service";

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrls: ['./auth-home.component.css']
})
export class AuthHomeComponent implements OnInit {

  constructor(private auth:Auth) { }

  ngOnInit() {
  }

}
