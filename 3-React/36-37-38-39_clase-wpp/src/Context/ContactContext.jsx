import { createContext, useEffect, useState } from "react";
import { Outlet } from "react-router";
import { getContactsList } from "../services/contactService";


export const ContactContext = createContext()

export default function ContactContextProvider() {
    const [contacts, setContacts] = useState(null);
    const [loadingContacts, setLoadingContacts] = useState(true);
    
    function loadContacts() {
        setLoadingContacts(true);
        setTimeout(
            function () {
                const contacts_list_response = getContactsList()
                setContacts(contacts_list_response)
            },
            2000
        )
        setLoadingContacts(false);
    }

    function getContactById(contact_id) {
        if (!contacts) return null;
        return contacts.find(
            (contact) => contact.contact_id === parseInt(contact_id)
        );
    }

    function updateContactById(
        update_contact, // objeto
        contact_id_to_update // id
    ) {
        if (!contacts) return null;
        const contacts_update = contacts.map(
            (contact) => {
                if(Number(contact_id_to_update) === Number(contact.contact_id)) {
                    return update_contact;
                }
                return contact;
            }
        )
        setContacts(contacts_update);
    }
    
    useEffect(
        loadContacts,
        []
    )
    

    // Aquí van los valores que quieres compartir en el contexto
    const providerValues = {
        contacts,
        loadingContacts,
        getContactById,
        updateContactById,
        
    }

    // <Outlet />: Esto renderiza las rutas hijas (a nivel de rutas)
    return (
        <ContactContext.Provider value={providerValues}>
        
            <Outlet />  
        </ContactContext.Provider>
    )
}