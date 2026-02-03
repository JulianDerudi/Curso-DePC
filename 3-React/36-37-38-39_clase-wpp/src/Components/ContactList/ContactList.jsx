import { useContext } from "react"
import ContactItem from "../ContactItem/ContactItem"
import { ContactContext } from "../../Context/ContactContext"


export default function ContactList() {
    const { contacts, loadingContacts } = useContext(ContactContext)
    /* RESPONSABILIDAD DE RENDERIZAR LA LISTA DE CONTACTOS */

    if(loadingContacts) {
        return (
            <div>Loading Contacts... </div>
        )
    }

    if(!contacts || contacts.length === 0) {
        return <div>Conseguite Amigos porfavor</div>
    }
    

    return (
        <div>
            {
                contacts.map(
                    contact => (
                        <ContactItem key={contact.contact_id} contact={contact} />
                    )
                )
            }
        </div>
        
    )
}