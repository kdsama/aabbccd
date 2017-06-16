import { Component, OnInit } from '@angular/core';
import {ToggleSidebarService} from '../broadcasters/ham-press-broadcaster.service';

@Component({
  selector: 'rc-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private tss: ToggleSidebarService) { }

  ngOnInit() {
  }
  
  onClickHam() {
    this.tss.toggleSidebarAnnouncement();
  }

}
