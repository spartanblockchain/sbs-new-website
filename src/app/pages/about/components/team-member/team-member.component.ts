import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-team-member',
  template: `<a target="_blank" class="pic_item" href="{{link}}">
              <div>
                <img class="profileImgSbs" src="{{this.fullPath}}" />
                <p class="position"><b class="position_name">{{fname}} {{lname}}</b>
                  <br>
                  {{position}}
                </p>
              </div>
            </a>`,
  styleUrls: ['./team-member.component.css']
})
export class TeamMemberComponent implements OnInit {
  @Input() link:string;
  @Input() img:string;
  @Input() fname:string;
  @Input() lname:string;
  @Input() position:string;

  fullPath = ""
  constructor() { }

  ngOnInit(): void {
    this.fullPath = "assets/images/profileImages/" + this.img;
  }

}
