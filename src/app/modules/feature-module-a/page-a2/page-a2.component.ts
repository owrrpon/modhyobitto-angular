import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-page-a2',
  templateUrl: './page-a2.component.html',
  styleUrls: ['./page-a2.component.scss']
})
export class PageA2Component implements OnInit, OnDestroy {

  // Subscription
  private initiate_login_sub!: Subscription;

  constructor(
    private global_utilities: AppUtilityService
  ){}

  ngOnInit(): void {
  }

  openCommunication(type: string){
    let cred = {
      username: 'error',
      password: 'error'
    };
    this.initiate_login_sub = this.global_utilities.login(cred).subscribe(
      (data)=>{
        //NOOP
      },
      (error)=>{
        switch (type) {
          case 'banner':
            this.global_utilities.showBanner();            
            break;
        
          case 'snackbar':
            this.global_utilities.showSnackbar();            
            break;
        }
      }
    );
  }

  ngOnDestroy(): void{
    this.global_utilities.unsubscribeAll([
      this.initiate_login_sub
    ]);

  }
}
