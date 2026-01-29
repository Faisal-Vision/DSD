import { Injectable } from "@angular/core";
import { HttpService } from "../Http/http.service";
import { IResponseResult } from "../../Interfaces/Shared/IResponseResult";


@Injectable({
  providedIn: "root",
})

export class VisitorService{    
    constructor(public httpService: HttpService) {}

    GetAll() 
    {      
     let Url =`Visitor/GetAll` ;
     return this.httpService.get<IResponseResult>(Url);
    }

    GetAllReportVisitor(body) 
    {      
     let Url =`Visitor/GetAllReportVisitor` ;
     return this.httpService.postAsGet<IResponseResult>(Url,body);
    }

    Report(body) 
    {      
     let Url =`Visitor/Report` ;
     return this.httpService.postAsGet<IResponseResult>(Url,body);
    }
      
    GetVisitorById(Id:number)
    {
     let Url =`Visitor/GetVisitorById?id=${Id}`;
     return this.httpService.get<IResponseResult>(Url);
    }
    GetVisitorByNid(Nid:string)
    {
     let Url =`Visitor/GetVisitorByNid?Nid=${Nid}`;
     return this.httpService.get<IResponseResult>(Url);
    }

    GetVisitorFromBanar(Nid:string)
    {
     let Url =`Visitor/GetVisitorFromBanar?Nid=${Nid}`;
     return this.httpService.get<IResponseResult>(Url);
    }

    GetVisitorFromErp(Nid:string)
    {
     let Url =`Visitor/GetVisitorFromErp?Nid=${Nid}`;
     return this.httpService.get<IResponseResult>(Url);
    }

    AddVisitor(body: any)
    {
      //alert(1);
     let Url =`Visitor/AddVisitor` ;
     return this.httpService.post<IResponseResult>(Url, body);
    }

    UpdateVisitor(body: any)
    {
      let Url =`Visitor/UpdateVisitor` ;
      return this.httpService.put<IResponseResult>(Url, body);
    }

    DeleteVisitor(Id:number)
    {
     const url = `Visitor/DeleteVisitor?id=${Id}`;
     return this.httpService.delete<IResponseResult>(url);
    }
}