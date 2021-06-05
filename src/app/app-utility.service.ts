import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AppDictionaryService } from './app-dictionary.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AppUtilityService extends AppDictionaryService {

  private globals: { [key:string]: any } = {
    ongoing_request_count: 0,
    loading_animation_control: new Subject<any>()
  };

  constructor(
    private http: HttpClient,
    private router: Router
  ) { super(); }

  serviceWrapper(
    HTTP_method: string,
    API_URL: string,
    responseProcessing: any,
    request_data?: any,
    skip_loading_animation?: boolean
  ): Subject<any> {

    let response_subject = new Subject<any>();

    // If it has not been explicitly mentioned to not show the loader, please show.
    if(!!!skip_loading_animation){
      this.globals.ongoing_request_count ++;
      this.globals.loading_animation_control.next(true);
    }

    // For local API requests, fetch the JSON file instead
    if(!environment.production){
      HTTP_method = 'GET';
      API_URL += '.json';
    }

    this.http.request(
      HTTP_method,
      API_URL,
      request_data
    ).pipe(
      finalize(
        () => {
          if(!!!skip_loading_animation){
            if(this.globals.ongoing_request_count > 0){
              this.globals.ongoing_request_count --;
            }
            // Hiding the loading animation
            this.globals.loading_animation_control.next(false);
          }
        }
      )      
    ).subscribe(
      (response: any) => {
        // If this is an error object directly send it across
        if(!!response['errorCode']){
          response_subject.error(response);
        }else{
          let processed_response = responseProcessing(response);
          if(!!processed_response.error){
            response_subject.error(processed_response.error);
          }else{
            response_subject.next(processed_response.data);
          }
        }
      },
      (error) => {
        let error_object = {
          'message' : this.error_messages.service_failure
        };
        response_subject.error(error_object);
      }
    );

    return response_subject;
  }

  login(user_credentials: any){
    let credentials = {...user_credentials};
    return this.serviceWrapper(
      'POST',
      this.getAPI('login'),
      (response: any) => {
        if(response.responseCode == 200){
          return {'data': response};
        }else{
          return {'error': response};
        }
      },
      {
        body: credentials
      }
    );
  }

  exportReport(data_source: string){
    return this.serviceWrapper(
      'POST',
      this.getAPI('export_report'),
      (response: any) => {
        let file_name = data_source+"_report.xlsx";
        //saveAs(response, file_name); TODO
        return {'data': {'message': 'export success'}};
      },
      {
        body: {
          source: data_source
        },
        responseType: "blob"
      }
    );
  }

  /*
  TODO
  displayAlertDialog(options?: any){
    let global_options = {
      scrollStrategy: this.overlay.scrollStrategies.noop()
    };
    let dialog_config = {...global_options, ...options};
    let dialog_ref = this.dialog.open(
      ModhyobittoAlertDialogComponent,
      dialog_config
    );
    return dialog_ref;
  }*/

  toggleFormControls(
    form_group: FormGroup, 
    control_list: string[], 
    to_enable: boolean){
      let control_count = control_list.length;
      for(let i=0; i < control_count; i++){
        let current_control = form_group.get(control_list[i]);
        if(to_enable){
          current_control?.enable({emitEvent: false});
        }else{
          current_control?.disable({emitEvent: false});
        }
      }
  }

  scrollToElement(element_ref: any, offset = 10){
    setTimeout(()=>{
      let is_selector = (typeof element_ref) == 'string';
      let element = (is_selector)? document.querySelector(element_ref) : element_ref;
      let scroll_extent = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo(0, scroll_extent);
    }, 200);
  }

  onRouteActivation(){
    this.scrollToElement('.page-content',100);
  }

  navigateToURL(URL: string){
    this.router.navigateByUrl(URL);
  }

  /* TODO
  getCookie(name: string){
    return this.cookieService.get(name);
  }

  setCookie(name, value){
    this.cookieService.set(name, value, {path: '/', expires: new Date('12/31/9999')});
  }

  deleteCookie(name){
    this.cookieService.delete(name);
  }

  */

  unsubscribeAll(subs: Subscription[]){
    let sub_count = subs.length;
    for(let i=0; i < sub_count; i++){
      let current_sub = subs[i];
      if(!!current_sub){
        current_sub.unsubscribe();
      }
    }
  }

  setGlobalData(key: string, value: any){
    this.globals[key] = value;
  }

  getGlobalData(key: string){
    return this.globals[key];
  }


}

