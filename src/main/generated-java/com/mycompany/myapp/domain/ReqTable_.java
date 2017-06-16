/*
 * Project home: https://github.com/jaxio/celerio-angular-quickstart
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Source code: https://github.com/jaxio/celerio/
 * Follow us on twitter: @jaxiosoft
 * This header can be customized in Celerio conf...
 * Template pack-angular:src/main/java/domain/EntityMeta_.java.e.vm
 */
package com.mycompany.myapp.domain;

import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(ReqTable.class)
public abstract class ReqTable_ {

    // Raw attributes
    public static volatile SingularAttribute<ReqTable, Integer> id;
    public static volatile SingularAttribute<ReqTable, String> reqBy;
    public static volatile SingularAttribute<ReqTable, Integer> iv1;
    public static volatile SingularAttribute<ReqTable, Integer> iv2;
    public static volatile SingularAttribute<ReqTable, Integer> iv3;
    public static volatile SingularAttribute<ReqTable, Boolean> status;

    // Many to one
    public static volatile SingularAttribute<ReqTable, User> parentName;
}