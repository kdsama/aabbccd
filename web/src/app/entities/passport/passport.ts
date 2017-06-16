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
import {User} from '../user/user';

export class Passport {
    // Raw attributes
    id : number;
    passportNumber : string;
    expirationDate : Date;
    // x-to-one
    holder : User;


    constructor(json? : any) {
        if (json != null) {
            this.id = json.id;
            this.passportNumber = json.passportNumber;
            if (json.expirationDate != null) {
                this.expirationDate = new Date(json.expirationDate);
            }

            if (json.holder != null) {
                this.holder = new User(json.holder);
            }
        }
    }

    // Utils

    static toArray(jsons : any[]) : Passport[] {
        let passports : Passport[] = [];
        if (jsons != null) {
            for (let json of jsons) {
                passports.push(new Passport(json));
            }
        }
        return passports;
    }
}
