//
// Project home: https://github.com/jaxio/celerio-angular-quickstart
// 
// Source code generated by Celerio, an Open Source code generator by Jaxio.
// Documentation: http://www.jaxio.com/documentation/celerio/
// Source code: https://github.com/jaxio/celerio/
// Follow us on twitter: @jaxiosoft
// This header can be customized in Celerio conf...
// Template pack-angular:web/src/app/entities/entity.ts.e.vm
//
import {Author} from '../author/author';

export class Book {
    // Raw attributes
    id : number;
    title : string;
    summary : string;
    extractFileName : string;
    extractContentType : string;
    extractSize : number;
    publicationDate : Date;
    bestSeller : boolean;
    price : number;
    // x-to-one
    coAuthor : Author;
    author : Author;


    constructor(json? : any) {
        if (json != null) {
            this.id = json.id;
            this.title = json.title;
            this.summary = json.summary;
            this.extractFileName = json.extractFileName;
            this.extractContentType = json.extractContentType;
            this.extractSize = json.extractSize;
            if (json.publicationDate != null) {
                this.publicationDate = new Date(json.publicationDate);
            }
            this.bestSeller = json.bestSeller;
            this.price = json.price;

            if (json.coAuthor != null) {
                this.coAuthor = new Author(json.coAuthor);
            }

            if (json.author != null) {
                this.author = new Author(json.author);
            }
        }
    }

    // Utils

    static toArray(jsons : any[]) : Book[] {
        let books : Book[] = [];
        if (jsons != null) {
            for (let json of jsons) {
                books.push(new Book(json));
            }
        }
        return books;
    }
}
