import PropTypes from 'prop-types';
import { ContsctBlock, ContactName, ContactNumber, BtnDeleteContact } from './ItemContact.styled';

const ItemContact = ({ id, name, number, deleteContact }) => {
  return (
    <ContsctBlock >
      <ContactName>{name}: </ContactName>
      <ContactNumber>{number}</ContactNumber>
      <BtnDeleteContact onClick={()=>{deleteContact(id)}}>Delete</BtnDeleteContact>
    </ContsctBlock>
  )
}

export default ItemContact;

ItemContact.propType = {
  id:PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.node,
}
