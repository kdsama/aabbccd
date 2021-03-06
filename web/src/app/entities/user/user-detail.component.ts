//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity-detail.component.ts.e.vm
//
import {Component, OnInit, OnDestroy, Input, Output, EventEmitter} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SelectItem } from 'primeng/primeng';
import { MessageService} from '../../service/message.service';
import {User} from './user';
import {UserService} from './user.service';
import {Passport} from '../passport/passport';
import {Role} from '../role/role';
import {RoleService} from '../role/role.service';

@Component({
    moduleId: module.id,
	templateUrl: 'user-detail.component.html',
	selector: 'user-detail',
})
export class UserDetailComponent implements OnInit, OnDestroy {
    user : User;

    private params_subscription: any;

    sourceRoles : Role[] = [];

    @Input() sub : boolean = false;
    @Output() onSaveClicked = new EventEmitter<User>();
    @Output() onCancelClicked = new EventEmitter();
    civilityOptions: SelectItem[];
    countryCodeOptions: SelectItem[];

    constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService, private userService: UserService, private roleService : RoleService) {
        this.civilityOptions = [];
        this.civilityOptions.push({"label": "Mister", 'value': "MR"});
        this.civilityOptions.push({"label": "Miss", 'value': "MS"});
        this.countryCodeOptions = [];
        this.countryCodeOptions.push({"label": "France", 'value': "FRANCE"});
        this.countryCodeOptions.push({"label": "Italy", 'value': "ITALY"});
        this.countryCodeOptions.push({"label": "United-States", 'value': "USA"});
        roleService.complete(null).
            subscribe(roles => this.sourceRoles = roles,
                        error =>  this.messageService.error('Constructor error', error));
    }

    ngOnInit() {
        if (this.sub) {
            return;
        }

        this.params_subscription = this.route.params.subscribe(params => {
            let id = params['id'];
            console.log('ngOnInit for user-detail ' + id);

            if (id === 'new') {
                this.user = new User();
            } else {
                this.userService.getUser(id)
                    .subscribe(user => {
                        // console.log("hjfsadklhfdsakhfdlakshflkdashf")
                        // console.log(user)
                            this.user = user;
                            this.sourceRoles = this.sourceRoles.filter(item => this.user.roles.map((e) => e.id).indexOf(item.id) < 0);
                        },
                        error =>  this.messageService.error('ngOnInit error', error)
                    );
            }
        });
    }

    ngOnDestroy() {
        if (!this.sub) {
            this.params_subscription.unsubscribe();
        }
    }

    onSave() {
        this.userService.update(this.user).
            subscribe(
                user => {
                    this.user = user;
                    if (this.sub) {
                        this.onSaveClicked.emit(this.user);
                        this.messageService.info('Saved OK and msg emitted', 'Angular Rocks!')
                    } else {
                        this.messageService.info('Saved OK', 'Angular Rocks!')
                    }
                },
                error =>  this.messageService.error('Could not save', error)
            );
    }

    onCancel() {
        if (this.sub) {
            this.onCancelClicked.emit("cancel");
            this.messageService.info('Cancel clicked and msg emitted', 'Angular Rocks!')
        }
    }

}
