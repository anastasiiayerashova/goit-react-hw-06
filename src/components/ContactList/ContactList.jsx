import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

import { selectContacts } from '../../redux/contactsSlice';
import { useSelector } from 'react-redux';
import { selectNameFilter } from '../../redux/filtersSlice';

export default function ContactList() {
    const contacts = useSelector(selectContacts)
    const filters = useSelector(selectNameFilter)

    const filteredData = contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase()))
   
  return (
    <ul className={s.list}>
      {filteredData.map((item) => (
        <li key={item.id}>  
          <Contact {...item}/>
        </li>
      ))}
    </ul>
  );
}