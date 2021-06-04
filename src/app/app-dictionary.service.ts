import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppDictionaryService {

  // This service contains all the static mappings.
  //  This is not the central data store and hence, does not store the application state.

  error_messages = {
    service_failure: 'Our apologies, this site is experiencing some technical difficulties. Please refresh the page pr try again.',
    validation: {
      percentage: 'Enter a percentage with max 2 decimal places.'
    }
  };

  regexes = {
    percentage: /^(\d{1,3})(\.\d{1,2})?$/
  };

  service_URLs: { [key:string]: string } = {
    'login': 'loginservice'
  };

  // Mapping website host with API host
  API_hosts: { [key:string]: string } = {
    'dummyhost': 'dummyhost:8080'
  };

  // Mapping website host with environment if needed by the API
  environment_mapping = {
    'localhost' : 'DEV'
  };

  settings = {
    API_full_hostname : 'assets/JSONs/'    
  };

  constructor() { 
    // For our sample application here, we have simply considered development as the localhost 
    // using JSONs and production for any subsequent environment.
    if(environment.production){
      let api_host = this.API_hosts[document.location.hostname];
      // The API application name wil be as per the backend host
      this.settings.API_full_hostname = document.location.protocol+"//"+api_host+'/<API application name>/';
    }
  }

  getAPI(key: string){
    let complete_URL = this.settings.API_full_hostname+this.service_URLs[key];
    return complete_URL;
  }
}
