import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCandidaturesComponent } from './all-candidatures/all-candidatures.component';
import { CandidatureComponent } from './candidature/candidature.component';

const routes: Routes = [
  {
    path: "candidatureForm",
    component: CandidatureComponent,
  },  {
    path: "allCandidatures",
    component: AllCandidaturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
