import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-feature-module-b-container',
  templateUrl: './feature-module-b-container.component.html',
  styleUrls: ['./feature-module-b-container.component.scss']
})
export class FeatureModuleBContainerComponent implements OnInit {

  constructor(
    public global_utilities: AppUtilityService
  ) { }

  ngOnInit(): void {
  }

}
