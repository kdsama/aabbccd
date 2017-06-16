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

import java.time.Instant;

import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@StaticMetamodel(User.class)
public abstract class User_ {

    // Raw attributes
    public static volatile SingularAttribute<User, Integer> id;
    public static volatile SingularAttribute<User, String> login;
    public static volatile SingularAttribute<User, String> password;
    public static volatile SingularAttribute<User, String> email;
    public static volatile SingularAttribute<User, Boolean> isEnabled;
    public static volatile SingularAttribute<User, Civility> civility;
    public static volatile SingularAttribute<User, CountryCode> countryCode;
    public static volatile SingularAttribute<User, String> firstName;
    public static volatile SingularAttribute<User, String> lastName;
    public static volatile SingularAttribute<User, Instant> creationDate;
    public static volatile SingularAttribute<User, String> creationAuthor;
    public static volatile SingularAttribute<User, Instant> lastModificationDate;
    public static volatile SingularAttribute<User, String> lastModificationAuthor;
    public static volatile SingularAttribute<User, Integer> version;

    // One to one
    public static volatile SingularAttribute<User, Passport> passport;

    // Many to many
    public static volatile ListAttribute<User, Role> roles;
}