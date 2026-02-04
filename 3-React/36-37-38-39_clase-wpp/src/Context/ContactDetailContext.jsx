/*
 trabajara a nivel de rutas
 sobre <Route path='/contact/:contact_id' element={<ContactDetailScreen />} />
 llamara al contact_id de la url 
 tendra una variable interna llamada contact_selected
 */

import { useContext } from "react";
import { ContactContext } from "./ContactContext";
import { useParams } from "react-router";
import { Outlet } from "react-router";
import { createContext } from "react";


export const ContactDetailContext = createContext(
    // valores iniciales del context
    {
        contact_selected: null
    }
)

export default function ContactDetailContextProvider() {
    const {getContactById, updateContactById} = useContext(ContactContext);
    const {contact_id} = useParams();
    const contact_selected = getContactById(contact_id);
    
    function addNewMessage (new_message_text){
        const new_message = {
            message_id: contact_selected.messages.length + 1,
            message_content: new_message_text,
            message_status: 'UNSEEN',
            message_created_at: new Date(),
            send_by_me: true
        }
        console.log(new_message)
        updateContactById(
            {messages: [...contact_selected.messages, new_message]},
            contact_id
        )
    }

    const providerValues = {
        contact_selected,
        addNewMessage
    }

    
    return (
        <ContactDetailContext.Provider value={providerValues}>
            <Outlet />
        </ContactDetailContext.Provider>
    )
}