import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { AppUtilityService } from './app-utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy{

  constructor(
    public global_utilities: AppUtilityService
  ){}

  ngOnInit(){}

  ngAfterViewInit(){}

  ngOnDestroy(){}

}
