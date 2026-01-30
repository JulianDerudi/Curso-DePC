import ContactItem from "../ContactItem/ContactItem"


export default function ContactList({contactsList, loadingContact}) {
    /* RESPONSABILIDAD DE RENDERIZAR LA LISTA DE CONTACTOS */

    if(loadingContact) {
        return (
            <div>Loading Contacts...</div>
        )
    }

    if(!contactsList || contactsList.length === 0) {
        return <div>Conseguite Amigos porfavor</div>
    }
    

    return (
        <div>
            {
                contactsList.map(
                    contact => (
                        <ContactItem key={contact.contact_id} contact={contact} />
                    )
                )
            }
        </div>
        
    )
}