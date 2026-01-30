import { useEffect, useState } from "react";
import ContactList from "../ContactList/ContactList";
import { getContactsList } from "../../services/contactService";

export default function ContactSidebar() {
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

    return (
        <div>
            <ContactList 
                contactsList={contacts} 
                loadingContact={loadingContacts}    
            />
        </div>
    )
}