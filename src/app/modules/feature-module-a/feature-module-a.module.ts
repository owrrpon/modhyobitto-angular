import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleARoutingModule } from './feature-module-a-routing.module';
import { FeatureModuleAContainerComponent } from './feature-module-a-container.component';


@NgModule({
  declarations: [
    FeatureModuleAContainerComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleARoutingModule
  ]
})
export class FeatureModuleAModule { }
