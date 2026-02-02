import { getDateFormated } from "../../utils/formatDate";

export default function MessagesList({ contactMessages, contact}) {

    if (!contactMessages || contactMessages.length === 0) {
        return <div><h3>No hay mensajes con {contact.contact_name} para mostrar</h3></div>;
    }

    /* si isDarkMode es true, entonces mostrar los mensajes con color rojo */
    return (
        <div>
            <h2 style={{ color: "black" }}>Mensajes con {contact.contact_name}</h2>
            {contactMessages.map((message) => (
                <div key={message.message_id} style={{ color: "black" }}>
                    <strong>{message.send_by_me ? "You" : contact.contact_name}:</strong> {message.message_content} <br />
                    <span>{getDateFormated(message.message_created_at)}</span> <span>{message.message_status}</span>
                </div>
            ))}
        </div>
    )
}