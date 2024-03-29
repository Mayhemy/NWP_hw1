import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  token: string = localStorage.getItem('token') || '';
  constructor() { }

  loadToken() {
    localStorage.setItem('token',this.token);
  }

  ngOnInit(): void {
  }
}
