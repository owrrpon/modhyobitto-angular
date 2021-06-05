import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-feature-module-a-container',
  templateUrl: './feature-module-a-container.component.html',
  styleUrls: ['./feature-module-a-container.component.scss']
})
export class FeatureModuleAContainerComponent implements OnInit {

  constructor(
    public global_utilities: AppUtilityService
  ) { }

  ngOnInit(): void {
  }

}
