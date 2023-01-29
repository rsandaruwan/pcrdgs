import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './pages/home/home.component';
import { OurNetworkComponent } from './pages/our-network/our-network.component';
import { OurEventComponent } from './pages/our-event/our-event.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { PcdgComponent } from './pages/pcdg/pcdg.component';
import { PcrgComponent } from './pages/pcrg/pcrg.component';
import { EducationalProgramsComponent } from './pages/educational-programs/educational-programs.component';
import { EducationalPrograms2Component } from './pages/educational-programs2/educational-programs2.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PcrgFormComponent } from './pages/forms/pcrg-form/pcrg-form.component';
import {MatStepperModule} from '@angular/material/stepper';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CCEBDMComponent } from './pages/forms/ccebdm/ccebdm.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { UploaderModule } from '@syncfusion/ej2-angular-inputs';
import {MatTableModule} from '@angular/material/table';
import { SwiperModule } from 'swiper/angular';
import {MatSelectModule} from '@angular/material/select';


import { MatButtonModule } from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { PcdgFormComponent } from './pages/forms/pcdg-form/pcdg-form.component';
import { CopdComponent } from './pages/forms/copd/copd.component';














@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OurNetworkComponent,
    OurEventComponent,
    AboutUsComponent,
    PcdgComponent,
    PcrgComponent,
    EducationalProgramsComponent,
    EducationalPrograms2Component,
    ContactUsComponent,
    PcrgFormComponent,
    CCEBDMComponent,
    PcdgFormComponent,
    CopdComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,
    MatIconModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    UploaderModule,
    MatTableModule,
    SwiperModule,
    MatSelectModule,
    MatButtonModule,
    MatAutocompleteModule,

  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
