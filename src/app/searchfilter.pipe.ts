import { Pipe, PipeTransform } from '@angular/core';
import { EmployeeModel } from 'src/tests';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(employee: EmployeeModel[], searchValue: string): EmployeeModel[] {

    if (!employee || !searchValue){
      return employee;
    }
    return employee.filter(EmployeeModel =>
       EmployeeModel.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
       EmployeeModel.city.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||  
       EmployeeModel.department.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())  
    );
  }

}
