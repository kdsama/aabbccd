import { Component, OnInit, Input, Output, EventEmitter, trigger, state, style, transition, animate } from '@angular/core';
import { ToggleSidebarService } from '../broadcasters/ham-press-broadcaster.service';

@Component({
  selector: 'rc-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  animations: [
    trigger('listState', [
      state('hidden', style({
        height: 0
      })),
      state('visible',   style({
        height: '*'
      })),
      transition('hidden => visible', animate('600ms ease')),
      transition('visible => hidden', animate('600ms ease'))
    ])
  ]
})
export class MenuItemComponent implements OnInit {

  // Inputs
  @Input() menuItem: any;
  // Outputs
  @Output() hoverItem:EventEmitter<string> = new EventEmitter<string>();

  sidebarExpanded:boolean = false;
  collapsibleListState: string = "hidden";
  caretClasses:any;
  
  constructor(private tss:ToggleSidebarService) { }

  ngOnInit() {
    this.tss.expansionAnnouncement$.subscribe((expansionState) => {
      this.sidebarExpanded = expansionState;
    });
  }

  onMouseEnterOverItem(event) {
    this.hoverItem.emit(String(event.target.getBoundingClientRect().top));
  }

  onMouseLeaveFromItem($event) {
    this.hoverItem.emit(String(-200));
  }

  onClickItemIcon(event) {
    this.tss.expandSidebarAnnouncement();
  }

  anyChildren(menuItem) {
    return menuItem.children && menuItem.children.length > 0;  
  }

  onClickListItem(event) {
    this.toggleChildrenList();
  }

  toggleChildrenList() {
    this.collapsibleListState = (this.collapsibleListState == "hidden" ? "visible" : "hidden");
  }

  onHoverItem(event) {
    this.hoverItem.emit(event);
  }
}