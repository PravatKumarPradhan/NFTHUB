import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FooterComponent } from './footer/footer.component';
import { FeaturesComponent } from './features/features.component';
import { ContactusComponent } from './contactus/contactus.component';
import { EmployeeCreateComponent } from './employee-create/employee-create.component';


const routes: Routes = [
 
  { path: 'home', component: HomeComponent },{path:'footer',component: FooterComponent},
  {path:'features',component: FeaturesComponent} ,{path:'contactus',component: ContactusComponent},
  {path:'employee-create',component :EmployeeCreateComponent},
  {path:'',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
