import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  TITLE: string = "About Us";
  DESCRIPTION: string = "About Us Description"
  constructor() { }

  ngOnInit(): void {
  }

}
