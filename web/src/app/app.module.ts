//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/app.module.ts.p.vm
//
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule  }  from '@angular/router';
import { MaterialModule } from '@angular/material';
import { ConfirmDialogModule, FileUploadModule, PanelModule, GrowlModule, MenubarModule, DialogModule, ButtonModule, AutoCompleteModule, SharedModule, DropdownModule,PickListModule,CheckboxModule,TriStateCheckboxModule, InputTextModule,InputTextareaModule,CalendarModule,PasswordModule,TabViewModule } from 'primeng/primeng';
import { ConfirmationService } from 'primeng/primeng';
import { AppComponent }   from './app.component';
import { HomeComponent }  from './home.component';
import { AuthService } from './service/auth.service';
import { MessageService } from './service/message.service';
import { routing }        from './app.routes';
import { EmailValidator } from './support/email.validator';
import { ConfirmDeleteDialogComponent } from './support/confirm-delete-dialog.component';


// Author ...
import { AuthorService } from './entities/author/author.service';
import { AuthorListComponent } from './entities/author/author-list.component';
import { AuthorDetailComponent } from './entities/author/author-detail.component';
import { AuthorLineComponent } from './entities/author/author-line.component';
import { AuthorCompleteComponent } from './entities/author/author-auto-complete.component';

// Book ...
import { BookService } from './entities/book/book.service';
import { BookListComponent } from './entities/book/book-list.component';
import { BookDetailComponent } from './entities/book/book-detail.component';
import { BookLineComponent } from './entities/book/book-line.component';
import { BookCompleteComponent } from './entities/book/book-auto-complete.component';

// DisTable ...
import { DisTableService } from './entities/disTable/disTable.service';
import { DisTableListComponent } from './entities/disTable/disTable-list.component';
import { DisTableDetailComponent } from './entities/disTable/disTable-detail.component';
import { DisTableLineComponent } from './entities/disTable/disTable-line.component';
import { DisTableCompleteComponent } from './entities/disTable/disTable-auto-complete.component';

// ManuTable ...
import { ManuTableService } from './entities/manuTable/manuTable.service';
import { ManuTableListComponent } from './entities/manuTable/manuTable-list.component';
import { ManuTableDetailComponent } from './entities/manuTable/manuTable-detail.component';
import { ManuTableLineComponent } from './entities/manuTable/manuTable-line.component';
import { ManuTableCompleteComponent } from './entities/manuTable/manuTable-auto-complete.component';

// Passport ...
import { PassportService } from './entities/passport/passport.service';
import { PassportListComponent } from './entities/passport/passport-list.component';
import { PassportDetailComponent } from './entities/passport/passport-detail.component';
import { PassportLineComponent } from './entities/passport/passport-line.component';
import { PassportCompleteComponent } from './entities/passport/passport-auto-complete.component';

// Project ...
import { ProjectService } from './entities/project/project.service';
import { ProjectListComponent } from './entities/project/project-list.component';
import { ProjectDetailComponent } from './entities/project/project-detail.component';
import { ProjectLineComponent } from './entities/project/project-line.component';
import { ProjectCompleteComponent } from './entities/project/project-auto-complete.component';

// ReqTable ...
import { ReqTableService } from './entities/reqTable/reqTable.service';
import { ReqTableListComponent } from './entities/reqTable/reqTable-list.component';
import { ReqTableDetailComponent } from './entities/reqTable/reqTable-detail.component';
import { ReqTableLineComponent } from './entities/reqTable/reqTable-line.component';
import { ReqTableCompleteComponent } from './entities/reqTable/reqTable-auto-complete.component';

// Role ...
import { RoleService } from './entities/role/role.service';
import { RoleListComponent } from './entities/role/role-list.component';
import { RoleDetailComponent } from './entities/role/role-detail.component';
import { RoleLineComponent } from './entities/role/role-line.component';
import { RoleCompleteComponent } from './entities/role/role-auto-complete.component';

// SupTable ...
import { SupTableService } from './entities/supTable/supTable.service';
import { SupTableListComponent } from './entities/supTable/supTable-list.component';
import { SupTableDetailComponent } from './entities/supTable/supTable-detail.component';
import { SupTableLineComponent } from './entities/supTable/supTable-line.component';
import { SupTableCompleteComponent } from './entities/supTable/supTable-auto-complete.component';

// UseCase1 ...
import { UseCase1Service } from './entities/useCase1/useCase1.service';
import { UseCase1ListComponent } from './entities/useCase1/useCase1-list.component';
import { UseCase1DetailComponent } from './entities/useCase1/useCase1-detail.component';
import { UseCase1LineComponent } from './entities/useCase1/useCase1-line.component';
import { UseCase1CompleteComponent } from './entities/useCase1/useCase1-auto-complete.component';

// UseCase2 ...
import { UseCase2Service } from './entities/useCase2/useCase2.service';
import { UseCase2ListComponent } from './entities/useCase2/useCase2-list.component';
import { UseCase2DetailComponent } from './entities/useCase2/useCase2-detail.component';
import { UseCase2LineComponent } from './entities/useCase2/useCase2-line.component';
import { UseCase2CompleteComponent } from './entities/useCase2/useCase2-auto-complete.component';

// UseCase3 ...
import { UseCase3Service } from './entities/useCase3/useCase3.service';
import { UseCase3ListComponent } from './entities/useCase3/useCase3-list.component';
import { UseCase3DetailComponent } from './entities/useCase3/useCase3-detail.component';
import { UseCase3LineComponent } from './entities/useCase3/useCase3-line.component';
import { UseCase3CompleteComponent } from './entities/useCase3/useCase3-auto-complete.component';

// User ...
import { UserService } from './entities/user/user.service';
import { UserListComponent } from './entities/user/user-list.component';
import { UserDetailComponent } from './entities/user/user-detail.component';
import { UserLineComponent } from './entities/user/user-line.component';
import { UserCompleteComponent } from './entities/user/user-auto-complete.component';

// UserDetails ...
import { UserDetailsService } from './entities/userDetails/userDetails.service';
import { UserDetailsListComponent } from './entities/userDetails/userDetails-list.component';
import { UserDetailsDetailComponent } from './entities/userDetails/userDetails-detail.component';
import { UserDetailsLineComponent } from './entities/userDetails/userDetails-line.component';
import { UserDetailsCompleteComponent } from './entities/userDetails/userDetails-auto-complete.component';

//sidebar
import {HeaderComponent} from './sidebar/header/header.component';
import {MenuComponent} from './sidebar/menu/menu.component';
import {MenuItemComponent} from './sidebar/menu-item/menu-item.component';
import {SidebarComponent} from './sidebar/sidebar/sidebar.component';
import {ToggleSidebarService} from './sidebar/broadcasters/ham-press-broadcaster.service';

import {DataTableModule} from "angular2-datatable";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmailValidator,
    ConfirmDeleteDialogComponent
    ,
    AuthorListComponent,
    AuthorDetailComponent,
    AuthorLineComponent,
    AuthorCompleteComponent
    ,
    BookListComponent,
    BookDetailComponent,
    BookLineComponent,
    BookCompleteComponent
    ,
    DisTableListComponent,
    DisTableDetailComponent,
    DisTableLineComponent,
    DisTableCompleteComponent
    ,
    ManuTableListComponent,
    ManuTableDetailComponent,
    ManuTableLineComponent,
    ManuTableCompleteComponent
    ,
    PassportListComponent,
    PassportDetailComponent,
    PassportLineComponent,
    PassportCompleteComponent
    ,
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectLineComponent,
    ProjectCompleteComponent
    ,
    ReqTableListComponent,
    ReqTableDetailComponent,
    ReqTableLineComponent,
    ReqTableCompleteComponent
    ,
    RoleListComponent,
    RoleDetailComponent,
    RoleLineComponent,
    RoleCompleteComponent
    ,
    SupTableListComponent,
    SupTableDetailComponent,
    SupTableLineComponent,
    SupTableCompleteComponent
    ,
    UseCase1ListComponent,
    UseCase1DetailComponent,
    UseCase1LineComponent,
    UseCase1CompleteComponent
    ,
    UseCase2ListComponent,
    UseCase2DetailComponent,
    UseCase2LineComponent,
    UseCase2CompleteComponent
    ,
    UseCase3ListComponent,
    UseCase3DetailComponent,
    UseCase3LineComponent,
    UseCase3CompleteComponent
    ,
    UserListComponent,
    UserDetailComponent,
    UserLineComponent,
    UserCompleteComponent
    ,
    UserDetailsListComponent,
    UserDetailsDetailComponent,
    UserDetailsLineComponent,
    UserDetailsCompleteComponent,

    HeaderComponent,
    MenuComponent,
    MenuItemComponent,
    SidebarComponent
    ],
    imports: [
// angular
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,

// angular material,
        MaterialModule,

// primeng
        ConfirmDialogModule,
        FileUploadModule,
        PanelModule,
        GrowlModule,
        MenubarModule,
        DialogModule,
        ButtonModule,
        AutoCompleteModule,
        DataTableModule,
        SharedModule,
        DropdownModule,
        PickListModule,
        CheckboxModule,
        TriStateCheckboxModule,
        InputTextModule,
        InputTextareaModule,
        CalendarModule,
        PasswordModule,
        TabViewModule,

// our application routes
        routing
    ],
    providers: [
// our application entity services
        AuthorService,
        BookService,
        DisTableService,
        ManuTableService,
        PassportService,
        ProjectService,
        ReqTableService,
        RoleService,
        SupTableService,
        UseCase1Service,
        UseCase2Service,
        UseCase3Service,
        UserService,
        UserDetailsService,
        ToggleSidebarService,

// our application services
        AuthService,
        MessageService,

// primeng service
        ConfirmationService
    ],
    entryComponents: [ConfirmDeleteDialogComponent],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
