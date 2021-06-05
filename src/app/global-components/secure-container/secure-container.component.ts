import { Component, OnInit } from '@angular/core';
import { AppUtilityService } from 'src/app/app-utility.service';

@Component({
  selector: 'app-secure-container',
  templateUrl: './secure-container.component.html',
  styleUrls: ['./secure-container.component.scss']
})
export class SecureContainerComponent implements OnInit {

  constructor(
    public global_utilities: AppUtilityService
  ) { }

  ngOnInit(): void {
  }

}
