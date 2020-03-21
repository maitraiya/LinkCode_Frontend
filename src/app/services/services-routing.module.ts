import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServicesComponent } from './services.component';
import { CorporateTrainingComponent } from './corporate-training/corporate-training.component';
import { InternshipComponent } from './internship/internship.component';
import { CorporateWorkshopComponent } from './corporate-workshop/corporate-workshop.component';
import { SoftwareDevelopmentComponent } from './software-development/software-development.component';
import { ProjectConsultingComponent } from './project-consulting/project-consulting.component';
import { TechnologiesComponent } from './technologies/technologies.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: ServicesComponent, children: [
      { path: '', redirectTo: 'software-development', pathMatch: 'full' },
      { path: 'corporate-training', component: CorporateTrainingComponent },
      { path: 'corporate-workshop', component: CorporateWorkshopComponent },
      { path: 'internship', component: InternshipComponent },
      { path: 'software-development', component: SoftwareDevelopmentComponent },
      { path: 'project-consulting', component: ProjectConsultingComponent },
      { path : 'technology', component: TechnologiesComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
