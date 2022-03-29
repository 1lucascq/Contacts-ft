import React from 'react';
import ContactsTable from '../componentes/ContactsTable';
import InputSection from '../componentes/InputSection';
import '../App.css';
import { Typography } from '@mui/material';

function Phonebook() {
  return (
    <main className="main-content">
      
      <InputSection />

      <Typography variant="h4" gutterBottom sx={{ textAlign: "center", marginTop: 3 }}>
        CONTACTS
      </Typography>

      <ContactsTable />

    </main>
  );
}

export default Phonebook;
