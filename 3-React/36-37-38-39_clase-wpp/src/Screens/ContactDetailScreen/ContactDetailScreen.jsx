import { useParams } from "react-router";
import { getContactById } from "../../services/contactService";
import MessagesList from "../../Components/MessagesList/MessagesList";
import { useContext, useEffect } from "react";
import { ContactDetailContext } from "../../Context/ContactDetailContext";
import { ContactContext } from "../../Context/ContactContext";


export default function ContactDetailScreen() {
    const contact_params = useParams();
    const { contact_selected } = useContext(ContactDetailContext);
   
    const {updateContactById} = useContext(ContactContext)


    if (!contact_selected) {
        return <div><h2>Contact not found</h2></div>;
    }

    // a los 3 seg de ejecutar el componente se va a cambiar el nombre del contacto
    // a "Prueba de update"
    useEffect(
        () => {
            setTimeout(
                () => {
                    updateContactById(
                        {...contact_selected, contact_name: 'Prueba de update'},
                        contact_selected.contact_id
                    )
                },
                3000
            )
        }
    )

    return (
        <div>
            <h1>Contact Detail</h1>
            <img src={contact_selected.contact_avatar} alt="contact avatar" />
            <MessagesList  />
        </div>
    )
}