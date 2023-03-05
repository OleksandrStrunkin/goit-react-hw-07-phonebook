import styled from './ContactList.module.css'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


import { getFilteredContacts} from 'redux/contacts/contacts-selectors';
import { fetchContacts, fetchDeleteContacts } from 'redux/contacts/contacts-operation';

const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getFilteredContacts);

    useEffect(() => {
        dispatch(fetchContacts())
        
    }, [dispatch])
    
    console.log(contacts)
    const onDeleteContact = id => {
      dispatch(fetchDeleteContacts(id));
    };
     return (
         <ul className={styled.list}>
             {contacts.map((contact) => {
                 return (  
                         <li className={styled.listItem} key={contact.id}>{contact.name}<p>{contact.number}</p>
                            <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
                         </li>
                 )
             } )}
            </ul>
     )
}

export default ContactList
