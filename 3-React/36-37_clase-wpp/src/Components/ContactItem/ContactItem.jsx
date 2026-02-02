import { Link } from "react-router"
import { useContext } from "react"
import { ThemeContext } from "../../Context/themeContext.jsx"

export default function ContactItem({contact}) {
    /* RESPONSABILIDAD DE RENDERIZAR UN CONTACTO EN PARTICULAR */
    const { isDarkMode } = useContext(ThemeContext)
    
    /* si  darkMode es true entonces mostrar las letras rojas */
    return (
        <Link to={`/contact/${contact.contact_id}`}>
            
            <img src={contact.contact_avatar} alt="contact avatar" />
            <h4 style={{ color: isDarkMode ? "red" : "black" }}>{contact.contact_name}</h4>
            <p style={{ color: isDarkMode ? "red" : "black" }}>Mensaje: {contact.last_message_content}</p>
            <span style={{ color: isDarkMode ? "red" : "black" }}>Hora: {contact.last_message_created_at.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            <br />
            <span style={{ color: isDarkMode ? "red" : "black" }}>{contact.last_message_status}</span>
            <hr />
        </Link>
    )
}