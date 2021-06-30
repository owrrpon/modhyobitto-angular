import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-page-b6',
  templateUrl: './page-b6.component.html',
  styleUrls: ['./page-b6.component.scss']
})
export class PageB6Component implements OnInit, AfterViewInit {

  displayed_columns: string[] = ['a', 'b', 'c'];
  table_data_source = new MatTableDataSource<ModhyobittoData>(DUMMY_TABLE_DATA);
  //updated_row = null;

  

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }


  ngAfterViewInit(): void {
    this.table_data_source.paginator = this.paginator;    
  }

  ngOnInit(): void {
    //this.table_data_source = new MatTableDataSource<ModhyobittoData>(DUMMY_TABLE_DATA);
  }

  // editRow(row: ModhyobittoData){
    
  // }

  // ifHighlightedRow(row: any){
  //   let if_highlighted = false;

  //   return if_highlighted;
  // }

}

export interface ModhyobittoData {
  a: string,
  b: string,
  c: number
}

const DUMMY_TABLE_DATA: ModhyobittoData[]= [
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
