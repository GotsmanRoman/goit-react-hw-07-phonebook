import { List, Element, Button } from './ContactList.module';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../API/API';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDelete = itemId => {
    dispatch(deleteContact(itemId));
  };

  function filterArray() {
    return contacts.filter(({ name }) => {
      return name.toLowerCase().includes(filter.toLowerCase());
    });
  }
  const filteredArray = filterArray();
  return (
    <List>
      {filteredArray
        ? filteredArray.map(({ name, phone, id }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {phone}
                <Button onClick={() => handleDelete(id)} id={id}>
                  Delete {id}
                </Button>
              </Element>
            );
          })
        : contacts.map(({ name, phone, id }) => {
            return (
              <Element key={id}>
                Name: {name}, Tel: {phone}
                <Button onClick={() => handleDelete(id)} id={id}>
                  Delete
                </Button>
              </Element>
            );
          })}
    </List>
  );
};

export { ContactList };
