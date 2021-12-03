import { Component,  OnInit, ViewChild,  } from '@angular/core';
import { ApiService } from '../shared/api.service';







@Component({
  selector: 'app-employeestable',
  templateUrl: './employeestable.component.html',
  styleUrls: ['./employeestable.component.css']
})


export class EmployeestableComponent implements OnInit {
 employeeeprop !: any ;
 closeResult = ''; 
searchValue: string;
constructor(private service: ApiService){}




ngOnInit(){
   
  this.Getallemployee();

}
  
Getallemployee(){
  this.service.getEmployee()
  .subscribe(res=>{
    this.employeeeprop = res;
  })
}

DeleteEmployee(employeeID:number)
{
  var ans = confirm("Do you want to delete customer with Id: " +employeeID);  
          if (ans) {  
              this.service.deleteEmployee(employeeID).subscribe((data) => {  
                  this.Getallemployee();  
              }, error => console.error(error))   
          }  
      }  
  
}


  
  