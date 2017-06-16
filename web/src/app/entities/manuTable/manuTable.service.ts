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
import { ManuTable } from './manuTable';

@Injectable()
export class ManuTableService {

    private options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });

    constructor(private http: Http, private messageService : MessageService) {}

    /**
     * Get a ManuTable by id.
     */
    getManuTable(id : any) : Observable<ManuTable> {
        return this.http.get('/api/manuTables/' + id)
            .map(response => new ManuTable(response.json()))
            .catch(this.handleError);
    }

    /**
     * Update the passed manuTable.
     */
    update(manuTable : ManuTable) : Observable<ManuTable> {
        let body = JSON.stringify(manuTable);

        return this.http.put('/api/manuTables/', body, this.options)
            .map(response => new ManuTable(response.json()))
            .catch(this.handleError);
    }

    /**
     * Load a page (for paginated datatable) of ManuTable using the passed
     * manuTable as an example for the search by example facility.
     */
    getPage(manuTable : ManuTable, event : LazyLoadEvent) : Observable<PageResponse<ManuTable>> {
        let req = new PageRequestByExample(manuTable, event);
        let body = JSON.stringify(req);

        return this.http.post('/api/manuTables/page', body, this.options)
            .map(response => {
                let pr : any = response.json();
                return new PageResponse<ManuTable>(pr.totalPages, pr.totalElements, ManuTable.toArray(pr.content));
            })
            .catch(this.handleError);
    }

    /**
     * Performs a search by example on 1 attribute (defined on server side) and returns at most 10 results.
     * Used by ManuTableCompleteComponent.
     */
    complete(query : string) : Observable<ManuTable[]> {
        let body = JSON.stringify({'query': query, 'maxResults': 10});
        return this.http.post('/api/manuTables/complete', body, this.options)
            .map(response => ManuTable.toArray(response.json()))
            .catch(this.handleError);
    }

    /**
     * Delete an ManuTable by id.
     */
    delete(id : any) {
        return this.http.delete('/api/manuTables/' + id).catch(this.handleError);
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
