import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { ERPatientsComponent } from './er-patients/er-patients.component';

const routes: Routes = [

  // {path:'', redirectTo: '/app-er-patients', pathMatch: 'full'},
  // {path:'app-er-patients', component:ERPatientsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
