import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  TITLE: string = "Education";
  DESCRIPTION: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
