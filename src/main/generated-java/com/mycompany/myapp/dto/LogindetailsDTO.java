/*
 * Project home: https://github.com/jaxio/celerio-angular-quickstart
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Source code: https://github.com/jaxio/celerio/
 * Follow us on twitter: @jaxiosoft
 * This header can be customized in Celerio conf...
 * Template pack-angular:src/main/java/dto/EntityDTO.java.e.vm
 */
package com.mycompany.myapp.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;

/**
 * Simple DTO for Logindetails.
 */
public class LogindetailsDTO {
    public String id;
    public String password;
    public Integer manu;
    public Integer sup;

    @JsonIgnore
    public boolean isIdSet() {
        return id != null && !id.isEmpty();
    }
}