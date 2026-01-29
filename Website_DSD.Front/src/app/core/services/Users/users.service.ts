import { Injectable } from "@angular/core";
import { HttpService } from "../Http/http.service";
import { IResponseResult } from "../../Interfaces/Shared/IResponseResult";


@Injectable({
  providedIn: "root",
})

export class UsersService{    
    constructor(public httpService: HttpService) {}

    GetAll() 
    {      
     let Url =`Admin/GetAll` ;
     return this.httpService.get<IResponseResult>(Url);
    }
      
    GetById(Id:number)
    {
     let Url =`Admin/GetById?id=${Id}`;
     return this.httpService.get<IResponseResult>(Url);
    }


    AddAdmin(body: any)
    {
     let Url =`Admin/AddAdmin` ;
     return this.httpService.post<IResponseResult>(Url, body);
    }

    UpdateAdmin(body: any)
    {
      let Url =`Admin/UpdateAdmin` ;
      return this.httpService.put<IResponseResult>(Url, body);
    }

    Delete(Id:number)
    {
     const url = `Admin/Delete?id=${Id}`;
     return this.httpService.delete<IResponseResult>(url);
    }
}