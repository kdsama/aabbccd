import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { HeaderComponent } from './header/header.component';

import {ToggleSidebarService} from './broadcasters/ham-press-broadcaster.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SidebarComponent, MenuComponent, MenuItemComponent, HeaderComponent],
  providers: [ToggleSidebarService],
  exports: [SidebarComponent]
})
export class SidebarModule { }
