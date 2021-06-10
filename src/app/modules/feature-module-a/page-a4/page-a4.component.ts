import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-page-a4',
  templateUrl: './page-a4.component.html',
  styleUrls: ['./page-a4.component.scss']
})
export class PageA4Component implements OnInit, OnDestroy {

  // Subscription
  private file_download_sub!: Subscription;
  
  constructor(
    private global_utilities: AppUtilityService
  ){}

  ngOnInit(): void {
  }

  downloadFile(){
    this.file_download_sub = this.global_utilities.downloadFile().subscribe(
      (data)=>{
        this.global_utilities.showSnackbar('File downloaded successfully!');
      },
      (error)=>{
        this.global_utilities.showBanner();
      }
    );
  }

  ngOnDestroy(): void{
    this.global_utilities.unsubscribeAll([
      this.file_download_sub
    ]);

  }

}
