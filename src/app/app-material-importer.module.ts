import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MatRippleModule } from '@angular/material/core';

const MATERIAL_COMPONENTS = [
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatRippleModule
];


@NgModule({
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS
})
export class AppMaterialImporterModule { }
