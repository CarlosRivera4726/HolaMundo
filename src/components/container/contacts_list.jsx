import React from 'react';
import { Contacts } from '../../models/contacts.class';
import ContactsComponent from '../pure/contacts';

const ContactsListComponent = () => {

    const defaultContacts = new Contacts("Carlos", "Rivera", "carlosrivera_-717hotmail.com", false);
    const changeStatus = () => {
        defaultContacts.conected = !defaultContacts.conected;
        return true;
    }
    return (
        <div>
            <div>
                Your Contacts:
            </div>
            <ContactsComponent contacts={defaultContacts}></ContactsComponent>
            <div>
                <button onClick={changeStatus}>Change Status</button>
            </div>
        </div>
    );
}

export default ContactsListComponent;
