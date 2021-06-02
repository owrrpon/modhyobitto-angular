import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  is_page_scrolled: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event.currentTarget.pageYOffset'])
  handleStickyNavigation(sroll_distance: Number){
    this.is_page_scrolled = sroll_distance >= 100;
  }

}
