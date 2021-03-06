//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity.service.ts.e.vm
//
import { Injectable } from '@angular/core';
import { HttpModule, Http, Response, Headers, RequestOptions } from '@angular/http';
import { LazyLoadEvent } from 'primeng/primeng';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../../service/message.service';
import { PageResponse, PageRequestByExample } from '../../support/paging';
import { UserDetails } from './userDetails';

@Injectable()
export class UserDetailsService {

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http, private messageService : MessageService) {}

    /**
     * Get a UserDetails by id.
     */
    getUserDetails(id : any) : Observable<UserDetails> {
        return this.http.get('/api/userDetailss/' + id)
            .map(response => new UserDetails(response.json()))
            .catch(this.handleError);
    }

    /**
     * Update the passed userDetails.
     */
    update(userDetails : UserDetails) : Observable<UserDetails> {
        let body = JSON.stringify(userDetails);

        return this.http.put('/api/userDetailss/', body, this.options)
            .map(response => new UserDetails(response.json()))
            .catch(this.handleError);
    }

    /**
     * Load a page (for paginated datatable) of UserDetails using the passed
     * userDetails as an example for the search by example facility.
     */
    getPage(userDetails : UserDetails, event : LazyLoadEvent) : Observable<PageResponse<UserDetails>> {
        let req = new PageRequestByExample(userDetails, event);
        let body = JSON.stringify(req);

        return this.http.post('/api/userDetailss/page', body, this.options)
            .map(response => {
                let pr : any = response.json();
                return new PageResponse<UserDetails>(pr.totalPages, pr.totalElements, UserDetails.toArray(pr.content));
            })
            .catch(this.handleError);
    }

    /**
     * Performs a search by example on 1 attribute (defined on server side) and returns at most 10 results.
     * Used by UserDetailsCompleteComponent.
     */
    complete(query : string) : Observable<UserDetails[]> {
        let body = JSON.stringify({'query': query, 'maxResults': 10});
        return this.http.post('/api/userDetailss/complete', body, this.options)
            .map(response => UserDetails.toArray(response.json()))
            .catch(this.handleError);
    }

    /**
     * Delete an UserDetails by id.
     */
    delete(id : any) {
        return this.http.delete('/api/userDetailss/' + id).catch(this.handleError);
    }

    // sample method from angular doc
    private handleError (error: any) {
        // TODO: seems we cannot use messageService from here...
        let errMsg = (error.message) ? error.message :
        error.status ? `Status: ${error.status} - Text: ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        if (error.status === 401 ) {
            window.location.href = '/';
        }
        return Observable.throw(errMsg);
    }
}
