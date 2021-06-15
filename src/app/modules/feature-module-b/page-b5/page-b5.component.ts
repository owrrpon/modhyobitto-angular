import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-page-b5',
  templateUrl: './page-b5.component.html',
  styleUrls: ['./page-b5.component.scss']
})
export class PageB5Component implements OnInit {

  file_upload_config = {
    API: this.global_utilities.getAPI('file_upload'),
    MIME_types_accepted: "application/pdf",
    is_multiple_selection_allowed: true,
    data: null
  };

  constructor(
    private global_utilities: AppUtilityService
    ) { }

  ngOnInit(): void {
  }

}
