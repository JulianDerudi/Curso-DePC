import { useParams } from "react-router";
import { getContactById } from "../../services/contactService";
import MessagesList from "../../Components/MessagesList/MessagesList";

export default function ContactDetailScreen() {
    const contact_params = useParams();

    const contact_id = contact_params.contact_id;
    const contact = getContactById(contact_id);

    if (!contact) {
        return <div><h2>Contact not found</h2></div>;
    }

    return (
        <div>
            <h1>Contact Detail</h1>
            <img src={contact.contact_avatar} alt="contact avatar" />
            <MessagesList contactMessages={contact.messages} contact={contact} />
        </div>
    )
}