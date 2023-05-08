import { ListItem, Text, DelBtn } from '../ContactListItem/ContactListItem.styled';

const ContactListItem = ({ id, name, number, onDelete }) => {
  return (
    <ListItem>
      <Text>{name}: {number}</Text>
      <DelBtn type="button" onClick={() => onDelete(id)}>Delete</DelBtn>
    </ListItem>
  )
}

export default ContactListItem;