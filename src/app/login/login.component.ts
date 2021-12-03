import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { EmployeeModel } from 'src/tests';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  
  employeeModelObj: EmployeeModel = new EmployeeModel();

  constructor(private api : ApiService){}
  employeeform= new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    ismarried: new FormControl('',Validators.required)
  })

get id(){return this.employeeform.get('id')}
get name(){return this.employeeform.get('name')} 
get department(){return this.employeeform.get('department')} 
get gender(){return this.employeeform.get('gender')}
get city(){return this.employeeform.get('city')}
get ismarried(){return this.employeeform.get('ismarried')}

 postEmployeeDetails(){
   this.employeeModelObj.id=this.employeeform.value.id;
   this.employeeModelObj.name=this.employeeform.value.name;
   this.employeeModelObj.department=this.employeeform.value.department;
   this.employeeModelObj.gender=this.employeeform.value.gender;
   this.employeeModelObj.city=this.employeeform.value.city;
   this.employeeModelObj.ismarried=this.employeeform.value.ismarried;
  
   this.api.postEmployee(this.employeeModelObj)
    .subscribe(res=>{
     console.log(res);
     alert("Employee added successfully")
   },
   err=>{
    alert("This User 'ID' Already Found")
   })
 }

}
