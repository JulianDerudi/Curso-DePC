import { Link } from "react-router"


export default function ContactItem({contact}) {
    /* RESPONSABILIDAD DE RENDERIZAR UN CONTACTO EN PARTICULAR */
    
    return (
        <Link to={`/contact/${contact.contact_id}`}>
            <img src={contact.contact_avatar} alt="contact avatar" />
            <h4>{contact.contact_name}</h4>
            <p>Mensaje: {contact.last_message_content}</p>
            <span>Hora: {contact.last_message_created_at.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            <br />
            <span>{contact.last_message_status}</span>
            <hr />
        </Link>
    )
}