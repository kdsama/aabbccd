/*
 * Project home: https://github.com/jaxio/celerio-angular-quickstart
 * 
 * Source code generated by Celerio, an Open Source code generator by Jaxio.
 * Documentation: http://www.jaxio.com/documentation/celerio/
 * Source code: https://github.com/jaxio/celerio/
 * Follow us on twitter: @jaxiosoft
 * This header can be customized in Celerio conf...
 * Template pack-angular:src/main/java/rest/EntityResource.java.e.vm
 */
package com.mycompany.myapp.rest;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;
import static org.springframework.web.bind.annotation.RequestMethod.DELETE;
import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;
import static org.springframework.web.bind.annotation.RequestMethod.PUT;

import java.beans.PropertyEditorSupport;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RequestBody;

import com.mycompany.myapp.domain.UserDetails;
import com.mycompany.myapp.domain.UserDetailsPk;
import com.mycompany.myapp.dto.UserDetailsDTO;
import com.mycompany.myapp.dto.UserDetailsDTOService;
import com.mycompany.myapp.dto.support.PageRequestByExample;
import com.mycompany.myapp.dto.support.PageResponse;
import com.mycompany.myapp.repository.UserDetailsRepository;
import com.mycompany.myapp.rest.support.AutoCompleteQuery;

@RestController
@RequestMapping("/api/userDetailss")
public class UserDetailsResource {

    private final Logger log = LoggerFactory.getLogger(UserDetailsResource.class);

    @Inject
    private UserDetailsRepository userDetailsRepository;
    @Inject
    private UserDetailsDTOService userDetailsDTOService;

    @InitBinder
    public void initBinder(WebDataBinder binder) {
        binder.registerCustomEditor(UserDetailsPk.class, new PropertyEditorSupport() {
            @Override
            public String getAsText() {
                return getValue().toString();
            }

            @Override
            public void setAsText(String text) throws IllegalArgumentException {
                setValue(UserDetailsPk.fromString(text));
            }
        });
    }

    /**
     * Create a new UserDetails.
     */
    @RequestMapping(value = "/", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDetailsDTO> create(@RequestBody UserDetailsDTO userDetailsDTO) throws URISyntaxException {

        log.debug("Create UserDetailsDTO : {}", userDetailsDTO);

        if (userDetailsDTO.isIdSet()) {
            return ResponseEntity.badRequest().header("Failure", "Cannot create UserDetails with existing ID").body(null);
        }

        UserDetailsDTO result = userDetailsDTOService.save(userDetailsDTO);

        return ResponseEntity.created(new URI("/api/userDetailss/" + result.id)).body(result);
    }

    /**
    * Find by id UserDetails.
    */
    @RequestMapping(value = "/{id}", method = GET, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDetailsDTO> findById(@PathVariable UserDetailsPk id) throws URISyntaxException {

        log.debug("Find by id UserDetails : {}", id);

        return Optional.ofNullable(userDetailsDTOService.findOne(id)).map(userDetailsDTO -> new ResponseEntity<>(userDetailsDTO, HttpStatus.OK))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    /**
     * Update UserDetails.
     */
    @RequestMapping(value = "/", method = PUT, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<UserDetailsDTO> update(@RequestBody UserDetailsDTO userDetailsDTO) throws URISyntaxException {

        log.debug("Update UserDetailsDTO : {}", userDetailsDTO);

        if (!userDetailsDTO.isIdSet()) {
            return create(userDetailsDTO);
        }

        UserDetailsDTO result = userDetailsDTOService.save(userDetailsDTO);

        return ResponseEntity.ok().body(result);
    }

    /**
     * Find a Page of UserDetails using query by example.
     */
    @RequestMapping(value = "/page", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<PageResponse<UserDetailsDTO>> findAll(@RequestBody PageRequestByExample<UserDetailsDTO> prbe) throws URISyntaxException {
        PageResponse<UserDetailsDTO> pageResponse = userDetailsDTOService.findAll(prbe);
        return new ResponseEntity<>(pageResponse, new HttpHeaders(), HttpStatus.OK);
    }

    /**
    * Auto complete support.
    */
    @RequestMapping(value = "/complete", method = POST, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<List<UserDetailsDTO>> complete(@RequestBody AutoCompleteQuery acq) throws URISyntaxException {

        List<UserDetailsDTO> results = userDetailsDTOService.complete(acq.query, acq.maxResults);

        return new ResponseEntity<>(results, new HttpHeaders(), HttpStatus.OK);
    }

    /**
     * Delete by id UserDetails.
     */
    @RequestMapping(value = "/{id}", method = DELETE, produces = APPLICATION_JSON_VALUE)
    public ResponseEntity<Void> delete(@PathVariable UserDetailsPk id) throws URISyntaxException {

        log.debug("Delete by id UserDetails : {}", id);

        try {
            userDetailsRepository.delete(id);
            return ResponseEntity.ok().build();
        } catch (Exception x) {
            // todo: dig exception, most likely org.hibernate.exception.ConstraintViolationException
            return ResponseEntity.status(HttpStatus.CONFLICT).build();
        }
    }
}