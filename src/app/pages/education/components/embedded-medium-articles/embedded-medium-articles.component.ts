import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: 'app-embedded-medium-articles',
  templateUrl: './embedded-medium-articles.component.html',
  styleUrls: ['./embedded-medium-articles.component.css']
})
export class EmbeddedMediumArticlesComponent {
  constructor() { }
  @ViewChild("feedInput", { static: false }) feedInput: ElementRef;
  feedUrl = "https://medium.com/feed/spartan-blockchain";
  updateFeed() {
    this.feedUrl = this.feedInput.nativeElement.value;
  }
}
