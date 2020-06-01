import { Component, OnInit } from '@angular/core';
import { sbsTeamMembers, boardOfDirectors, facultyAdvisors, professionalAdvisors } from './Teams'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  sbsTeamMembers = sbsTeamMembers;
  boardOfDirectors = boardOfDirectors;
  facultyAdvisors = facultyAdvisors;
  professionalAdvisors = professionalAdvisors;
  constructor() { }

  ngOnInit(): void {

  }

}
