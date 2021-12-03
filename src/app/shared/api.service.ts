import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';
import { tap } from 'rxjs/internal/operators/tap';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  myAppUrl: string="";
  constructor(private http: HttpClient) { 
   this.myAppUrl = "http://localhost:3000/posts" ;
  }

  postEmployee(data:any){
    return this.http.post<any>("http://localhost:3000/posts",data)
    .pipe(tap((res:any)=>{
      return res;
    }))
  }

  public getEmployee()
  {
    return this.http.get("http://localhost:3000/posts")
  }

  updateEmployee(id: number , employee :any) {  
            return this.http.put<any>(this.myAppUrl +"/"+  employee.id, employee).pipe(
                tap(form => this.log(`Modify Employee`))
              );  
        }  
    
  
   deleteEmployee(id:number) {
   return this.http.delete<any>(this.myAppUrl + "/" + id).pipe(
     map(form=> this.log(`save employee`))
   );
 }
 getEmployeeById(id: number) {  
          return this.http.get<any>(this.myAppUrl+"/"+ id).pipe(
              tap(form => this.log(`fetched Employee By Id`))
            );
      }  
  
      
    private log(message :string){
      console.log(message);
    }
}
