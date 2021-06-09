import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-page-a3',
  templateUrl: './page-a3.component.html',
  styleUrls: ['./page-a3.component.scss']
})
export class PageA3Component implements OnInit {

  constructor(
    private global_utilities: AppUtilityService
  ) { }

  ngOnInit(): void {
  }

  openDialog(type: string){
    this.global_utilities.displayAlertDialog({
      data:{
        title: "Everything's Not Lost",
        type: type,
        message: "If you ever feel neglected, if you think all is lost, I'll be counting up my demons (yeah) hoping everything's not lost."
      }
    });
  }

}
