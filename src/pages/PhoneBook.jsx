import React from 'react';
import ContactsTable from '../components/ContactsTable';
import Header from '../components/Header';
import '../App.css';

function Phonebook() {
  return (
    <main className="main-content">
      
      <Header />

      <ContactsTable />

    </main>
  );
}

export default Phonebook;
