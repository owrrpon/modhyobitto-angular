import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-b5',
  templateUrl: './page-b5.component.html',
  styleUrls: ['./page-b5.component.scss']
})
export class PageB5Component implements OnInit {

  file_upload_config = {
    MIME_types_accepted: "application/pdf",
    is_multiple_selection_allowed: true,
    data: null
  };

  constructor() { }

  ngOnInit(): void {
  }

}
