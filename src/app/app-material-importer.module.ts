import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';

const MATERIAL_COMPONENTS = [
  MatTabsModule
];


@NgModule({
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS
})
export class AppMaterialImporterModule { }
