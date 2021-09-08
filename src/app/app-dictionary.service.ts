import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppDictionaryService {

  // This service contains all the static mappings.
  //  This is not the central data store and hence, does not store the application state.

  error_messages = {
    service_failure: 'Our apologies, this site is experiencing some technical difficulties. Please refresh the page or try again.',
    validation: {
      percentage: 'Enter a percentage with max 2 decimal places.'
    }
  };

  regexes = {
    percentage: /^(\d{1,3})(\.\d{1,2})?$/
  };

  service_URLs: { [key:string]: string } = {
    'login': 'loginservice',
    'file_download': 'file_download',
    'file_upload': 'file_upload',
    'table_row_add': 'table_row_add',
    'table_row_edit': 'table_row_edit'
  };

  // Mapping website host with API host
  API_hosts: { [key:string]: string } = {
    'dummyhost': 'dummyhost:8080/AppName/'
  };

  // Mapping website host with environment if needed by the API
  environment_mapping = {
    'localhost' : 'DEV'
  };

  settings = {
    API_full_hostname : document.location.origin+'/assets/JSONs/'
  };

  constructor() { 
    // For our sample application here, we have simply considered any environment
    // setting "dummy_JSONs" to use the JSON files instead of backend API
    if(!environment.dummy_JSONs){
      let api_host = this.API_hosts[document.location.hostname];
      // The API application name wil be as per the backend host
      this.settings.API_full_hostname = document.location.protocol+"//"+api_host;
    }
  }

  getAPI(key: string){
    let complete_URL = this.settings.API_full_hostname+this.service_URLs[key];
    return complete_URL;
  }
}
