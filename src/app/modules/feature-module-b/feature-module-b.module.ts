import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleBRoutingModule } from './feature-module-b-routing.module';
import { FeatureModuleBContainerComponent } from './feature-module-b-container.component';


@NgModule({
  declarations: [
    FeatureModuleBContainerComponent
  ],
  imports: [
    CommonModule,
    FeatureModuleBRoutingModule
  ]
})
export class FeatureModuleBModule { }
