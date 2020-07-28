import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-involved',
  templateUrl: './get-involved.component.html',
  styleUrls: ['./get-involved.component.css']
})
export class GetInvolvedComponent implements OnInit {

  TITLE: string = "Get Involved";
  DESCRIPTION: string = "";

  constructor() { }

  ngOnInit(): void {
  }
}
