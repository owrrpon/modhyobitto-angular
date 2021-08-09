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

  updateTableData(row_data:any, is_new_row_being_added:boolean){
    let API_key = is_new_row_being_added? 'table_row_add' : 'table_row_edit';
    return this.global_utilities.serviceWrapper(
      'POST',
      this.global_utilities.getAPI(API_key),
      (response: any)=>{
        return {'data': response.tableData};
      },
      {
        body: row_data
      }
    );
  }

  setModuleData(key: string, value: any){
    this.module_data[key] = value;
  }

  getModuleData(key: string){
    return this.module_data[key];
  }
}
