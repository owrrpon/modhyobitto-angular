import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureModuleBRoutingModule } from './feature-module-b-routing.module';
import { FeatureModuleBContainerComponent } from './feature-module-b-container.component';
import { PageB5Component } from './page-b5/page-b5.component';
import { PageB6Component } from './page-b6/page-b6.component';
import { PageB7Component } from './page-b7/page-b7.component';
import { PageB8Component } from './page-b8/page-b8.component';
import { AppMaterialImporterModule } from 'src/app/app-material-importer.module';


@NgModule({
  declarations: [
    FeatureModuleBContainerComponent,
    PageB5Component,
    PageB6Component,
    PageB7Component,
    PageB8Component
  ],
  imports: [
    CommonModule,
    FeatureModuleBRoutingModule,
    AppMaterialImporterModule    
  ]
})
export class FeatureModuleBModule { }
