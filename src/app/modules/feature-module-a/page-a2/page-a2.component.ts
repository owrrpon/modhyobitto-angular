import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-page-a2',
  templateUrl: './page-a2.component.html',
  styleUrls: ['./page-a2.component.scss']
})
export class PageA2Component implements OnInit {

  constructor(
    private global_utilities: AppUtilityService
  ){}

  ngOnInit(): void {
  }

  openBanner(){
    this.global_utilities.displayBanner(this.global_utilities.error_messages.service_failure);
  }

}
