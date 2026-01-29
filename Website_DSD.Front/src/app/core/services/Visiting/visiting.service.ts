import { Injectable } from "@angular/core";
import { HttpService } from "../Http/http.service";
import { IResponseResult } from "../../Interfaces/Shared/IResponseResult";


@Injectable({
  providedIn: "root",
})

export class VisitingService{    
    constructor(public httpService: HttpService) {}

    GetAll() 
    {      
     let Url =`Visiting/GetAll` ;
     return this.httpService.get<IResponseResult>(Url);
    }
      
    GetVisitorById(Id:number)
    {
     let Url =`Visiting/GetVisitngById?id=${Id}`;
     return this.httpService.get<IResponseResult>(Url);
    }


    AddVisiting(body: any)
    {
     let Url =`Visiting/AddVisiting` ;
     return this.httpService.post<IResponseResult>(Url, body);
    }

    UpdateVisiting(body: any)
    {
      let Url =`Visiting/UpdateVisiting` ;
      return this.httpService.put<IResponseResult>(Url, body);
    }

    DeleteVisiting(Id:number)
    {
     const url = `Visiting/DeleteVisiting?id=${Id}`;
     return this.httpService.delete<IResponseResult>(url);
    }
}