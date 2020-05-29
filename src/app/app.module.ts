import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PageHeadingComponent } from './shared/components/page-heading/page-heading.component';
import { EducationComponent } from './pages/education/education.component';
import { EventsComponent } from './pages/events/events.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';
import { ContactFormComponent } from './pages/get-involved/components/contact-form/contact-form.component';
import { TeamMemberComponent } from './pages/about/components/team-member/team-member.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    FooterComponent,
    PageHeadingComponent,
    EducationComponent,
    EventsComponent,
    GetInvolvedComponent,
    ContactFormComponent,
    TeamMemberComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
