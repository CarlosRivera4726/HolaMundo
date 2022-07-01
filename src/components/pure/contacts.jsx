import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Contacts } from '../../models/contacts.class';


const ContactsComponent = ({ contacts }) => {
    

    
    return (
        <div>
            <h2> Nombre: { contacts.name } </h2>
            <h2> Apellido: { contacts.lastName } </h2>
            <h2> Email: { contacts.email } </h2>
            <h2> Estado: {contacts.conected ? 'Contacto En Línea':'Contacto No Disponible'}  </h2>   
        </div>
        
    );
};


ContactsComponent.propTypes = {
    contacts: PropTypes.instanceOf(Contacts)
};


export default ContactsComponent;
