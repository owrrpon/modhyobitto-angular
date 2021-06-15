import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialImporterModule } from 'src/app/app-material-importer.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ModhyobittoFormFieldComponent } from './modhyobitto-form-field/modhyobitto-form-field.component';
import { ModhyobittoDialogComponent } from './modhyobitto-dialog/modhyobitto-dialog.component';
import { ModhyobittoFileUploaderComponent } from './modhyobitto-file-uploader/modhyobitto-file-uploader.component';
import { DragAndDropDirective } from './drag-and-drop-directive/drag-and-drop.directive';

const UTILITY_COMPONENTS = [
  ModhyobittoFormFieldComponent,
  ModhyobittoDialogComponent,
  ModhyobittoFileUploaderComponent,
  DragAndDropDirective
];


@NgModule({
  imports: [
    CommonModule,
    AppMaterialImporterModule,
    ReactiveFormsModule
  ],
  declarations: UTILITY_COMPONENTS,
  exports: UTILITY_COMPONENTS
})
export class SharedUtilitiesModule { }
