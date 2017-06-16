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
import {UserDetails} from './userDetails';
import {UserDetailsService} from './userDetails.service';

@Component({
    moduleId: module.id,
	templateUrl: 'userDetails-detail.component.html',
	selector: 'userDetails-detail',
})
export class UserDetailsDetailComponent implements OnInit, OnDestroy {
    userDetails : UserDetails;

    private params_subscription: any;


    @Input() sub : boolean = false;
    @Output() onSaveClicked = new EventEmitter<UserDetails>();
    @Output() onCancelClicked = new EventEmitter();

    constructor(private route: ActivatedRoute, private router: Router, private messageService: MessageService, private userDetailsService: UserDetailsService) {
    }

    ngOnInit() {
        if (this.sub) {
            return;
        }

        this.params_subscription = this.route.params.subscribe(params => {
            let id = params['id'];
            console.log('ngOnInit for userDetails-detail ' + id);

            if (id === 'new') {
                this.userDetails = new UserDetails();
            } else {
                this.userDetailsService.getUserDetails(id)
                    .subscribe(userDetails => {
                            this.userDetails = userDetails;
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
        this.userDetailsService.update(this.userDetails).
            subscribe(
                userDetails => {
                    this.userDetails = userDetails;
                    if (this.sub) {
                        this.onSaveClicked.emit(this.userDetails);
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
