import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { EducationComponent } from './pages/education/education.component';
import { EventsComponent } from './pages/events/events.component';
import { GetInvolvedComponent } from './pages/get-involved/get-involved.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'education', component: EducationComponent },
  { path: 'events', component: EventsComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  // wildcard route
  { path: "**", redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }