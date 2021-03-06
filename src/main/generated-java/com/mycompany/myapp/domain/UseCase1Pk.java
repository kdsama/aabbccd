/*
 * Project home: https://github.com/jaxio/celerio-angular-quickstart
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Source code: https://github.com/jaxio/celerio/
 * Follow us on twitter: @jaxiosoft
 * This header can be customized in Celerio conf...
 * Template pack-angular:src/main/java/domain/CompositePk.java.cpk.vm
 */
package com.mycompany.myapp.domain;

import static org.apache.commons.lang.StringUtils.isNotEmpty;

import java.io.Serializable;
import java.time.Instant;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import com.google.common.base.Objects;

@Embeddable

public class UseCase1Pk implements Comparable<UseCase1Pk>, Serializable {
    private static final long serialVersionUID = 1L;

    private Instant id1;
    private String id2;

    public UseCase1Pk() {
    }

    public UseCase1Pk(Instant id1, String id2) {
        this.id1 = id1;
        this.id2 = id2;
    }

    /**
     * Helper to determine if this composite primary key is fully set.
     */
    @Transient
    public boolean areFieldsSet() {
        return isId1Set() && isId2Set();
    }

    /**
     * Helper method to determine if this instance is considered empty, that is,
     * if all the non primary key columns are null.
     */
    @Transient
    public boolean isEmpty() {
        return !isId1Set() && !isId2Set();
    }

    //-- [id1] ------------------------------

    @NotNull
    @Column(name = "id1", nullable = false, length = 19)
    public Instant getId1() {
        return id1;
    }

    public void setId1(Instant id1) {
        this.id1 = id1;
    }

    public UseCase1Pk id1(Instant id1) {
        setId1(id1);
        return this;
    }

    /**
     * Helper that determines if this attribute is set or not.
     */
    @Transient
    public boolean isId1Set() {
        return getId1() != null;
    }

    //-- [id2] ------------------------------

    @NotEmpty
    @Size(max = 100)
    @Column(name = "id2", nullable = false, length = 100)
    public String getId2() {
        return id2;
    }

    public void setId2(String id2) {
        this.id2 = id2;
    }

    public UseCase1Pk id2(String id2) {
        setId2(id2);
        return this;
    }

    /**
     * Helper that determines if this attribute is set or not.
     */
    @Transient
    public boolean isId2Set() {
        return getId2() != null && !getId2().isEmpty();
    }

    @Override
    public boolean equals(Object other) {
        return this == other || (other instanceof UseCase1Pk && hashCode() == other.hashCode());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId1(), //
                getId2());
    }

    @Override
    public int compareTo(UseCase1Pk other) {
        return other == null ? -1 : hashCode() - other.hashCode();
    }

    /**
    * Return the string representation of the composite primary key, it should be reversable by version produced by the {@link #String()} method
    */
    @Override
    public String toString() {
        StringBuilder result = new StringBuilder();
        if (isId1Set()) {
            result.append(getId1());
        }
        result.append("_");
        if (isId2Set()) {
            result.append(getId2());
        }

        return result.toString();
    }

    /**
     * Build an instance from a string version produced by the {@link #toString()} method
     */
    public static UseCase1Pk fromString(String string) {
        UseCase1Pk result = new UseCase1Pk();
        String[] values = string.split("_");
        if (isNotEmpty(values[0])) {
            result.setId1(java.time.Instant.parse(values[0]));
        }
        if (isNotEmpty(values[1])) {
            result.setId2(values[1]);
        }

        return result;
    }
}
