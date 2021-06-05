import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppUtilityService } from './app-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{

  is_loader_showing: boolean = false;
  loading_animation_control_sub!: Subscription;

  constructor(
    public global_utilities: AppUtilityService
  ){}

  ngOnInit(){}

  ngAfterViewInit(){
    let loader_control = this.global_utilities.getGlobalData('loading_animation_control');
    this.loading_animation_control_sub = loader_control.subscribe(
      (to_show: any) => {
        // Show if the loader is not being shown already
        if(to_show && !this.is_loader_showing){
          this.is_loader_showing = true;
        }
        // Hide if the loader is being shown and there is no ongoing service call in next few seconds
        if(!to_show && this.is_loader_showing){
          let ongoing_call_check_interval = setInterval(
            ()=>{
              let ongoing_call_count = this.global_utilities.getGlobalData('ongoing_request_count');
              if(ongoing_call_count == 0){
                this.is_loader_showing = false;
                clearInterval(ongoing_call_check_interval);
              }
            }, 1000
          );
        }
      }
    );
  }

  ngOnDestroy(){
    this.global_utilities.unsubscribeAll([
      this.loading_animation_control_sub
    ]);
  }

}
