import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {ToggleSidebarService} from '../broadcasters/ham-press-broadcaster.service';

@Component({
  selector: 'rc-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  //Inputs
  @Input() menuItems:any;

  //ViewChild
  @ViewChild('sidebar') sidebar: ElementRef;

  ngClasses:any = {}
  ngStyles:any = {}
  
  // Instance Variables
  isSidebarExpanded:boolean = false;
  sidebarHoverBoundaryStyles:any = {};

  constructor(private tss:ToggleSidebarService) { }

  ngOnInit() {
    this.setInitStyles();
    this.setInitClasses();

    this.tss.expansionAnnouncement$.subscribe((expansionState)=> {
      this.toggleSidebar(expansionState);
    });
  }

  toggleSidebar(expansionState) {
    this.isSidebarExpanded = expansionState;
  }
  
  // Init Methods

  setInitStyles() {
    // this.ngClasses["class"] = true;
  }

  setInitClasses() {
    // this.ngStyles["style"] = true;
  }

  // Help Methods

  setStyles(styleObj:any) {
    
  }

  setClasses(classObj:any) {

  }
  
  onHoverItem(top: string) {
    this.sidebarHoverBoundaryStyles["top"] = top + 'px';
  }
}
