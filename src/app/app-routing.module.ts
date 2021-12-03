import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { EmployeestableComponent } from './employeestable/employeestable.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:'login' , component: LoginComponent},
  {path:'employeestable' , component:EmployeestableComponent},
  {path:'home' , component:HomeComponent},
  {path:'editemployee/:id' , component: EditEmployeeComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
