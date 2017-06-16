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

export class SupTable {
    // Raw attributes
    id : number;
    iv1 : number;
    iv2 : number;
    iv3 : number;
    timestamp : Date;


    constructor(json? : any) {
        if (json != null) {
            this.id = json.id;
            this.iv1 = json.iv1;
            this.iv2 = json.iv2;
            this.iv3 = json.iv3;
            if (json.timestamp != null) {
                this.timestamp = new Date(json.timestamp);
            }
        }
    }

    // Utils

    static toArray(jsons : any[]) : SupTable[] {
        let supTables : SupTable[] = [];
        if (jsons != null) {
            for (let json of jsons) {
                supTables.push(new SupTable(json));
            }
        }
        return supTables;
    }
}