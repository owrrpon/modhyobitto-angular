import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
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
  
  displayed_columns!: string[];
  table_data_source: any;
  //updated_row = null;

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
    this.displayed_columns = columns_to_display;
  }

  trackDataChange(){
    this.data_change_sub = this.table_config.table_data_changer.subscribe(
      (new_data: any)=>{
        this.table_data_source = new MatTableDataSource<any>(new_data);
        this.table_data_source.paginator = this.paginator; 
      }
    );
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

  // editRow(row: ModhyobittoData){
    
  // }

  // ifHighlightedRow(row: any){
  //   let if_highlighted = false;

  //   return if_highlighted;
  // }



}
