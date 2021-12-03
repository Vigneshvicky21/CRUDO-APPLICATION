import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmployeeModel } from 'src/tests';
import{ActivatedRoute} from '@angular/router'


@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  employeeModelObj: EmployeeModel = new EmployeeModel();
  constructor(private api : ApiService , private router: ActivatedRoute) { }

  editform= new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    department: new FormControl('',Validators.required),
    gender: new FormControl('',Validators.required),
    city: new FormControl('',Validators.required),
    ismarried: new FormControl('',Validators.required)
  })

get id(){return this.editform.get('id')}
get name(){return this.editform.get('name')} 
get department(){return this.editform.get('department')} 
get gender(){return this.editform.get('gender')}
get city(){return this.editform.get('city')}
get ismarried(){return this.editform.get('ismarried')}

  ngOnInit(): void {
   // console.log(this.router.snapshot.params['id']);
   
    this.api.getEmployeeById(this.router.snapshot.params['id']).subscribe(
      (result)=>{
        //console.log(result);
        this.editform= new FormGroup({
          id: new FormControl(result['id']),
          name: new FormControl(result['name']),
          department: new FormControl(result['department']),
          gender: new FormControl(result['gender']),
          city: new FormControl(result['city']),
          ismarried: new FormControl(result['ismarried'])
        })
      }
    );
  }
  updateEmployeeDetails(){
   //console.log(this.editform.value);
   this.api.updateEmployee(this.router.snapshot.params['id'] , this.editform.value).subscribe(
     (result)=>{
       console.log(result);
       alert("Employee updated successfully");
     }
   )
  }
 

}
