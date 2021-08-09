import { AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-modhyobitto-table',
  templateUrl: './modhyobitto-table.component.html',
  styleUrls: ['./modhyobitto-table.component.scss']
})
export class ModhyobittoTableComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() table_config: any;

  @Output() onRowAdd = new EventEmitter<any>();
  @Output() onRowEdit = new EventEmitter<any>();
  
  displayed_columns!: string[];
  table_data_source: any;
  updated_row_index = -1;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // Subscriptions
  private data_change_sub!: Subscription;

  constructor(
    private global_utilities: AppUtilityService
  ) { }
  
  ngOnInit(): void {
    this.setDisplayedColumns(this.table_config.columns);

    // if there is any default/static data
    this.table_data_source = new MatTableDataSource<any>(this.table_config.default_data);

    if(!!this.table_config.table_data_changer){
      // if there is a scope to update data
      this.trackDataChange();
    }
  }
  
  setDisplayedColumns(column_config: any[]){
    let col_count = column_config.length;
    let columns_to_display = [];
    for(let i = 0; i<col_count; i++){
      let col_config = column_config[i];
      columns_to_display.push(col_config.key);
    }
    if(!!this.table_config?.ediTable?.edit){
      columns_to_display.push('edit');
    }
    this.displayed_columns = columns_to_display;
  }

  trackDataChange(){
    this.data_change_sub = this.table_config.table_data_changer.subscribe(
      (new_data: any)=>{
        this.table_data_source = new MatTableDataSource<any>(new_data.data);
        this.table_data_source.paginator = this.paginator;
        if(!!new_data.highlight){
          //if it is needed to highlight the updated/new row
          this.goToUpdatedPage(new_data.highlight, new_data.data);
        }
      }
    );
  }

  goToUpdatedPage(updated_row: any, data: any[]){
    //get the index of the updated row
    let updated_index = data.findIndex(
      (row)=>{
        let is_matching = true;
        let primary_key_count = this.table_config.primary_key_set.length;
        for(let i=0; i<primary_key_count; i++){
          let column = this.table_config.primary_key_set[i];
          if(row[column]!=updated_row[column]){
            is_matching = false;
            break;
          }
        }
        return is_matching;
      }
    );
    //get the page the updated row is and navigate to it after 1sec
    setTimeout(()=>{
      if(updated_index >= 0){
        let page_size = this.paginator.pageSize;
        let current_page_index = this.paginator.pageIndex;
        let calculated_page_index = Math.ceil((updated_index + 1)/page_size) - 1;
        if(calculated_page_index != current_page_index){
          if(calculated_page_index == 0){
            //if the first page is to be navigated to
            this.paginator.pageIndex = 1;
            this.paginator.previousPage();
          }else{
            this.paginator.pageIndex = calculated_page_index - 1;
            this.paginator.nextPage();
          }
        }
        this.updated_row_index = updated_index - (page_size * calculated_page_index);
        setTimeout(()=>{
          this.updated_row_index = -1;
        },4000);
      }
    },100);    
  }

  editRow(row: any){
    this.onRowEdit.emit(row);
  }

  addRow(){
    this.onRowAdd.emit();
  }
  
  ngAfterViewInit(): void {
    if(!!this.table_data_source){
      this.table_data_source.paginator = this.paginator; 
    }
  }
  
  ngOnDestroy(): void {
    this.global_utilities.unsubscribeAll([
      this.data_change_sub
    ]);
  }
}
