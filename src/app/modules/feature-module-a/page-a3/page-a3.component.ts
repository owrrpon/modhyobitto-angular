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

  openAlertDialog(){
    this.global_utilities.displayAlertDialog({
      data:{
        title: "Everything's Not Lost",
        message: "If you ever feel neglected, if you think all is lost, I'll be counting up my demons (yeah) hoping everything's not lost."
      }
    });
  }

  openConfirmationDialog(){
    this.global_utilities.displayAlertDialog({
      data:{
        title: "What Will Become Of Us?",
        message: "For they'll pour cement down this hole of ours and we'll be stuck under stones and flowers. Will we go alone out on our own? Oh, darling that's what will become of us?",
        dismiss_text: 'Dismiss',
        action_text: 'Concrete',
        action: ()=>{
          this.global_utilities.showSnackbar('We will bite our noses off to spite our faces, both of us will rust like metal fences in the rain.');
        }
      }
    });
  }

}
