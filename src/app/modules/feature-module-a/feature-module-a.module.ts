import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleARoutingModule } from './feature-module-a-routing.module';
import { FeatureModuleAContainerComponent } from './feature-module-a-container.component';
import { PageA1Component } from './page-a1/page-a1.component';
import { PageA2Component } from './page-a2/page-a2.component';
import { PageA3Component } from './page-a3/page-a3.component';
import { PageA4Component } from './page-a4/page-a4.component';
import { SharedUtilitiesModule } from '../__shared-utilities/shared-utilities.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppMaterialImporterModule } from 'src/app/app-material-importer.module';


@NgModule({
  declarations: [
    FeatureModuleAContainerComponent,
    PageA1Component,
    PageA2Component,
    PageA3Component,
    PageA4Component
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FeatureModuleARoutingModule,
    SharedUtilitiesModule,
    AppMaterialImporterModule
  ]
})
export class FeatureModuleAModule { }
