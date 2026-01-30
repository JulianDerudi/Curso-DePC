import contacts_data from "../data/contactData";


function getContactsList() {
  return contacts_data;
}

function getContactById(contact_id) {
  return contacts_data.find(
    (contact) => contact.contact_id === parseInt(contact_id)
  );
}

export { getContactsList, getContactById };