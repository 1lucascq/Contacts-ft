import React, { useContext } from 'react';
import ContactsTable from '../componentes/ContactsTable';
import InputSection from '../componentes/InputSection';
import '../App.css';
import PhBookContext from '../context/PhBookContext';
import EditInputSection from '../componentes/EditInputSection';
import { Typography } from '@mui/material';

function Phonebook() {
  const { editing } = useContext(PhBookContext);
  return (
    <main className="main-content">


      <Typography variant="h2" gutterBottom sx={{ textAlign: "center", marginTop: 3 }}>
        NEW
      </Typography>
      
      {editing ? <EditInputSection /> : <InputSection />}

      <Typography variant="h2" gutterBottom sx={{ textAlign: "center", marginTop: 3 }}>
        CONTACTS
      </Typography>

      <ContactsTable />

    </main>
  );
}

export default Phonebook;
