import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  TITLE: string = "Events";
  DESCRIPTION: string = "Events Description"

  constructor() { }

  ngOnInit(): void {
  }

}
