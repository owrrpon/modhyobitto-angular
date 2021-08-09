import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { AppUtilityService } from 'src/app/app-utility.service';
import { FeatureModuleBService } from '../feature-module-b.service';

@Component({
  selector: 'app-page-b7',
  templateUrl: './page-b7.component.html',
  styleUrls: ['./page-b7.component.scss']
})
export class PageB7Component implements OnInit, OnDestroy {

  table_config = {
    columns:  [
      {
        key: 'a',
        heading: 'Column A'
      },
      {
        key: 'b',
        heading: 'Column B'
      },
      {
        key: 'c',
        heading: 'Column C',
        numeric: true
      }
    ],
    primary_key_set: ['a'],
    default_data: DUMMY_TABLE_DATA,
    table_data_changer: new Subject<any>(),
    ediTable: {
      add: true,
      edit: true
    }
  };

  // for table update form
  is_table_being_updated: boolean = false;
  is_new_row_being_added: boolean = false;
  table_update_form!: FormGroup;
  existing_row_values!: any;

  // for table update API call
  private update_table_data_sub!: Subscription;
  
  constructor(
    private global_utilities: AppUtilityService,
    private feature_module_utilities: FeatureModuleBService
    ) { 
      this.table_update_form = new FormGroup({
        a: new FormControl('',[Validators.required]),
        b: new FormControl('',[]),
        c: new FormControl('',[])
      });
  }

  ngOnInit(): void {
  }

  addNewRow(){
    // enabling the primary key fields
    this.global_utilities.toggleFormControls(this.table_update_form, this.table_config.primary_key_set, true);
    // to reset the entire form
    this.table_update_form.reset();
    this.is_table_being_updated = true;
    this.is_new_row_being_added =  true;
  }

  editRow(row: any){
    this.existing_row_values = {...row};
    // to reset the entire form
    this.table_update_form.reset();
    // patch existing values in the form
    this.table_update_form.patchValue(row);
    // disabling the primary key fields
    this.global_utilities.toggleFormControls(this.table_update_form, this.table_config.primary_key_set, false);
    this.is_table_being_updated = true;
    this.is_new_row_being_added =  false;
  }

  updateTableData(){
    let updated_row_data = (this.is_new_row_being_added) ? {...this.table_update_form.value} : {...this.existing_row_values, ...this.table_update_form.value};

    this.update_table_data_sub = this.feature_module_utilities.updateTableData(updated_row_data, this.is_new_row_being_added).subscribe(
      (table_data)=>{
        //close the drawer and reset the update form
        this.is_table_being_updated = false;
        this.table_update_form.reset();
        //update the table with latest values
        this.table_config.table_data_changer.next({
          data: table_data,
          highlight: updated_row_data
        });
      },
      (error)=>{
        this.global_utilities.showSnackbar();
      }
    );
  }

  ngOnDestroy(): void {
    this.global_utilities.unsubscribeAll([
      this.update_table_data_sub
    ]);
  }


}

const DUMMY_TABLE_DATA: any[]= [
  { a: 'Dummy1', b: 'Data String 1', c: 21},
  { a: 'Dummy2', b: 'Data String 2', c: 22},
  { a: 'Dummy3', b: 'Data String 3', c: 23},
  { a: 'Dummy4', b: 'Data String 4', c: 24},
  { a: 'Dummy5', b: 'Data String 5', c: 25},
  { a: 'Dummy6', b: 'Data String 6', c: 26},
  { a: 'Dummy7', b: 'Data String 7', c: 27},
  { a: 'Dummy8', b: 'Data String 8', c: 28},
  { a: 'Dummy9', b: 'Data String 9', c: 29},
  { a: 'Dummy10', b: 'Data String 10', c: 30},
  { a: 'Dummy11', b: 'Data String 11', c: 31},
  { a: 'Dummy12', b: 'Data String 12', c: 32},
  { a: 'Dummy13', b: 'Data String 13', c: 33},
  { a: 'Dummy14', b: 'Data String 14', c: 34},
  { a: 'Dummy15', b: 'Data String 15', c: 35},
  { a: 'Dummy16', b: 'Data String 16', c: 36},
  { a: 'Dummy17', b: 'Data String 17', c: 37},
  { a: 'Dummy18', b: 'Data String 18', c: 38},
  { a: 'Dummy19', b: 'Data String 19', c: 39},
  { a: 'Dummy20', b: 'Data String 20', c: 40},
];
