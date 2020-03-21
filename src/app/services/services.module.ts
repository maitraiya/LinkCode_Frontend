import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { CorporateWorkshopComponent } from './corporate-workshop/corporate-workshop.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { InternshipComponent } from './internship/internship.component';
import { ProjectConsultingComponent } from './project-consulting/project-consulting.component';
import { TechnologiesComponent } from './technologies/technologies.component';


@NgModule({
  declarations: [
    ServicesComponent,
    SoftwareDevelopmentComponent,
    CorporateWorkshopComponent,
    CorporateTrainingComponent,
    InternshipComponent,
    ProjectConsultingComponent,
    TechnologiesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
