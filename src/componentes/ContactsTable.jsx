// Tabela que recebe o ContactsData.jsx para formar a tabela.
import { Grid } from '@mui/material';
import React from 'react';
import ContactsData from './ContactsData';

function ContactsTable() {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '100vh', minWidht: '80vw', marginTop: "2em" }}
    >
      <ContactsData />

    </Grid>
  );
}

export default ContactsTable;
