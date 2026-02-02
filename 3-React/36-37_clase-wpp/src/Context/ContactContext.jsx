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
    
    useEffect(
        loadContacts,
        []
    )
    

    const providerValues = {
        contacts,
        loadingContacts,
        // Aquí van los valores que quieres compartir en el contexto
    }

    // <Outlet />: Esto renderiza las rutas hijas (a nivel de rutas)
    return (
        <ContactContext.Provider value={providerValues}>
        
            <Outlet />  
        </ContactContext.Provider>
    )
}