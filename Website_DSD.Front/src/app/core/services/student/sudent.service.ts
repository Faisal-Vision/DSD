import { Injectable } from "@angular/core";
import { HttpService } from "../Http/http.service";
import { IResponseResult } from "../../Interfaces/Shared/IResponseResult";


@Injectable({
  providedIn: "root",
})

export class StudentService{    
    constructor(public httpService: HttpService) {}

    GetInfo() 
    {      
     let Url =`Student/GetInfo` ;
     return this.httpService.get<IResponseResult>(Url);
    }

    GetUnPaidPayments() 
    {      
     let Url =`Student/GetUnPaidPayments` ;
     return this.httpService.get<IResponseResult>(Url);
    }

    GetPaidPayments() 
    {      
     let Url =`Student/GetPaidPayments` ;
     return this.httpService.get<IResponseResult>(Url);
    }

    // Admin
    GetStudentsAsPagination(body) 
    {      
     let Url =`Student/GetStudentsAsPagination` ;
     return this.httpService.postAsGet<IResponseResult>(Url,body);
    }

    GetAllPaymentsForStudent(body) 
    {      
     let Url =`Student/GetAllPaymentsForStudent` ;
     return this.httpService.get<IResponseResult>(Url,body);
    }
      
}