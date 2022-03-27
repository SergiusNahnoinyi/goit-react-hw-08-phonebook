import { ToastContainer } from 'react-toastify';

import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';
import ContactsForm from './components/ContactsForm';
import Filter from './components/Filter';
import ContactsList from './components/ContactsList';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {
  return (
    <Container>
      <AppBar />
      <section className="phonebook">
        <h1 className="title">Phonebook</h1>
        <ContactsForm />

        <h2 className="title">Contacts</h2>
        <Filter />
        <ContactsList />
        <ToastContainer />
      </section>
    </Container>
  );
}
