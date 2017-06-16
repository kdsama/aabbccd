/*
 * Project home: https://github.com/jaxio/celerio-angular-quickstart
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Source code: https://github.com/jaxio/celerio/
 * Follow us on twitter: @jaxiosoft
 * This header can be customized in Celerio conf...
 * Template pack-angular:src/main/java/domain/Entity.java.e.vm
 */
package com.mycompany.myapp.domain;

import java.io.Serializable;
import java.util.logging.Logger;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.Size;

import org.hibernate.validator.constraints.NotEmpty;

import com.google.common.base.MoreObjects;
import com.google.common.base.Objects;

@Entity
@Table(name = "use_case_3", uniqueConstraints = { @UniqueConstraint(name = "PRIMARY", columnNames = { "id1", "id2" }) })
public class UseCase3 implements Identifiable<UseCase3Pk>, Serializable {
    private static final long serialVersionUID = 1L;
    private static final Logger log = Logger.getLogger(UseCase3.class.getName());

    // Composite primary key
    private UseCase3Pk id = new UseCase3Pk();

    // Raw attributes
    private String dummy;

    // Many to one
    private UseCase2 id2;

    @Override
    public String entityClassName() {
        return UseCase3.class.getSimpleName();
    }

    // -----------------------
    // Composite Primary Key
    // -----------------------

    /**
     * Returns the composite primary key.
     */
    @Override
    @EmbeddedId
    public UseCase3Pk getId() {
        return id;
    }

    /**
     * Set the composite primary key.
     * @param id the composite primary key.
     */
    @Override
    public void setId(UseCase3Pk id) {
        this.id = id;
    }

    public UseCase3 id(UseCase3Pk id) {
        setId(id);
        return this;
    }

    /**
     * Tells whether or not this instance has a non empty composite primary key set.
     * @return true if a non empty primary key is set, false otherwise
     */
    @Override
    @Transient
    public boolean isIdSet() {
        return getId() != null && getId().areFieldsSet();
    }
    // -- [dummy] ------------------------

    @NotEmpty
    @Size(max = 100)
    @Column(name = "dummy", nullable = false, length = 100)
    public String getDummy() {
        return dummy;
    }

    public void setDummy(String dummy) {
        this.dummy = dummy;
    }

    public UseCase3 dummy(String dummy) {
        setDummy(dummy);
        return this;
    }

    // -----------------------------------------------------------------
    // Many to One support
    // -----------------------------------------------------------------

    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
    // many-to-one: UseCase3.id2 ==> UseCase2.id
    // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

    @JoinColumn(name = "id2", nullable = false)
    @ManyToOne
    @MapsId(value = "id2")
    public UseCase2 getId2() {
        return id2;
    }

    /**
     * Set the {@link #id2} without adding this UseCase3 instance on the passed {@link #id2}
     * If you want to preserve referential integrity we recommend to use
     * instead the corresponding adder method provided by {@link UseCase2}
     */
    public void setId2(UseCase2 id2) {
        this.id2 = id2;
    }

    public UseCase3 id2(UseCase2 id2) {
        setId2(id2);
        return this;
    }

    /**
     * Apply the default values.
     */
    public UseCase3 withDefaults() {
        return this;
    }

    /**
     * Equals implementation using a business key.
     */
    @Override
    public boolean equals(Object other) {
        return this == other || (other instanceof UseCase3 && hashCode() == other.hashCode());
    }

    private IdentifiableHashBuilder identifiableHashBuilder = new IdentifiableHashBuilder();

    @Override
    public int hashCode() {
        return identifiableHashBuilder.hash(log, this);
    }

    /**
     * Construct a readable string representation for this UseCase3 instance.
     * @see java.lang.Object#toString()
     */
    @Override
    public String toString() {
        return MoreObjects.toStringHelper(this) //
                .add("dummy", getDummy()) //
                .toString();
    }
}