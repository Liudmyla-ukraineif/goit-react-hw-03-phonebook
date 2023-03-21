import PropTypes from 'prop-types';
import ItemContact from "../ItemContact/ItemContact";
import {List} from './ContactList.styled'

const ContactList = ({ contacts, filter, deleteContact }) => {
  return (
    <List>
      {contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase())).map(({id, name, number}) => (
        <ItemContact key={id} id={id} name={name} number={number} deleteContact={deleteContact} />
      ))}    
    </List>
  )
}
export default ContactList;


ContactList.propType = {
  contacts: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  })).isRequired,
  deleteContact:PropTypes.elementType,
}