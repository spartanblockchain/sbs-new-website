import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TITLE: string = "Spartan Blockchain Solutions";
  DESCRIPTION: string = "Home Description"

  constructor() { }

  ngOnInit(): void {
  }

}
