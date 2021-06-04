import { Injectable } from '@angular/core';
import { AppUtilityService } from 'src/app/app-utility.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureModuleBService {

  private module_data: { [key:string]: any } = {};

  constructor(
    private global_utilities: AppUtilityService
  ) { }

  setModuleData(key: string, value: any){
    this.module_data[key] = value;
  }

  getModuleData(key: string){
    return this.module_data[key];
  }
}
