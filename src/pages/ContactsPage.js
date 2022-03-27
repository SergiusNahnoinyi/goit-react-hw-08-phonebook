import { ToastContainer } from 'react-toastify';

import ContactsForm from '../components/ContactsForm';
import Filter from '../components/Filter';
import ContactsList from '../components/ContactsList';

import 'react-toastify/dist/ReactToastify.css';
import s from './ContactsPage.module.css';

export default function ContactsPage() {
  return (
    <section className={s.phonebook}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactsForm />

      <h2 className={s.title}>Contacts</h2>
      <Filter />
      <ContactsList />
      <ToastContainer />
    </section>
  );
}
