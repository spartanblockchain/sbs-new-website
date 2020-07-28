import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  TITLE: string = "Spartan Blockchain Solutions";
  DESCRIPTION: string = "Spartan Blockchain Solutions is a student-run, non-profit blockchain advisory and advocacy firm. Our mission is to provide local businesses and organizations with innovative blockchain solutions while jumpstarting Michigan State University’s ecosystem to become a leading academic institution in the blockchain space."

  constructor() { }

  ngOnInit(): void {
  }

}
