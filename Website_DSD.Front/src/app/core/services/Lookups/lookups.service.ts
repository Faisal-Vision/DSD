import { Injectable } from "@angular/core";
import { HttpService } from "../Http/http.service";
import { IResponseResult } from "../../Interfaces/Shared/IResponseResult";

@Injectable({
  providedIn: "root",
})

export class LookupsService {
  constructor(public httpService: HttpService) { }

  // GetAllLevels() {
  //   let Url = `Lookups/GetAll?className=LkpLevel`;
  //   return this.httpService.get<IResponseResult>(Url);
  // }

  GetAllPrograms() {
    let Url = `Lookups/GetAllPrograms`;
    return this.httpService.get<IResponseResult>(Url);
  }

}