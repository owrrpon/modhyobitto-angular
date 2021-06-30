import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatDialogModule} from '@angular/material/dialog';
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';


const MATERIAL_COMPONENTS = [
  MatTabsModule,
  MatInputModule,
  MatSelectModule,
  MatRippleModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatCheckboxModule,
  MatRadioModule,
  MatDialogModule,
  MatMenuModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatTooltipModule,
  MatTableModule,
  MatPaginatorModule
];


@NgModule({
  imports: MATERIAL_COMPONENTS,
  exports: MATERIAL_COMPONENTS
})
export class AppMaterialImporterModule { }
