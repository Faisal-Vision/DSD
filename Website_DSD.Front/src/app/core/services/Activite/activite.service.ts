import { Injectable } from "@angular/core";
import { HttpService } from "../Http/http.service";
import { IResponseResult } from "../../Interfaces/Shared/IResponseResult";


@Injectable({
  providedIn: "root",
})

export class ActiviteService{    
    constructor(public httpService: HttpService) {}

    GetAll() 
    {      
     let Url =`Activite/GetAll` ;
     return this.httpService.get<IResponseResult>(Url);
    }
      
    GetActiviteById(Id:number)
    {
     let Url =`Activite/GetActiviteById?id=${Id}`;
     return this.httpService.get<IResponseResult>(Url);
    }


    AddActivite(body: any)
    {
     let Url =`Activite/AddActivite` ;
     return this.httpService.post<IResponseResult>(Url, body);
    }

    UpdateActivite(body: any)
    {
      let Url =`Activite/UpdateActivite` ;
      return this.httpService.put<IResponseResult>(Url, body);
    }

    DeleteActivite(Id:number)
    {
     const url = `Activite/DeleteActivite?id=${Id}`;
     return this.httpService.delete<IResponseResult>(url);
    }
}