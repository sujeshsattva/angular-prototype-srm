import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './screens/auth/auth.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
 

const routes: Routes = [
  {
    path:"",
    component:AuthComponent
  },

  {
    path:"dashboard",
    component:DashboardComponent
  },
  
  {path: '**',component:AuthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

 

export class AppRoutingModule { }
