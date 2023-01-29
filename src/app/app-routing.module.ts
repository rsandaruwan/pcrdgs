import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OurEventComponent } from './pages/our-event/our-event.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { EducationalProgramsComponent } from './pages/educational-programs/educational-programs.component';
import { EducationalPrograms2Component } from './pages/educational-programs2/educational-programs2.component';
import { PcdgComponent } from './pages/pcdg/pcdg.component';
import { PcrgComponent } from './pages/pcrg/pcrg.component';

import {CCEBDMComponent } from './pages/forms/ccebdm/ccebdm.component';
import { PcrgFormComponent } from './pages/forms/pcrg-form/pcrg-form.component';
import { OurNetworkComponent } from './pages/our-network/our-network.component';
import { PcdgFormComponent } from './pages/forms/pcdg-form/pcdg-form.component';
import { CopdComponent } from './pages/forms/copd/copd.component';





const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'our_network', component: OurNetworkComponent},
  {path: 'pcrg', component: PcrgComponent},
  {path: 'pcdg', component: PcdgComponent},
  {path: 'educational_programs', component: EducationalProgramsComponent},
  {path: 'ourEvent', component: OurEventComponent},
  {path: 'contactus', component: ContactUsComponent},
  {path: 'educational_programs2', component: EducationalPrograms2Component},
  {path: 'ccebdm', component: CCEBDMComponent},
  {path: 'pcrg_form', component: PcrgFormComponent},
  {path: 'pcdg_form', component: PcdgFormComponent},
  {path: 'copd', component: CopdComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
