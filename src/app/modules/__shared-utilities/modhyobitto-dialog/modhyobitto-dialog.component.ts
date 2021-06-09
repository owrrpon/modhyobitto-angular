import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modhyobitto-dialog',
  templateUrl: './modhyobitto-dialog.component.html',
  styleUrls: ['./modhyobitto-dialog.component.scss']
})
export class ModhyobittoDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }

}
