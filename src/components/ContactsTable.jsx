// Tabela que recebe o ContactsData.jsx para formar a tabela.
import { Grid } from '@mui/material';
import React, { useEffect, useContext } from 'react';
import PhBookContext from '../context/PhBookContext';
import ContactsData from './ContactsData';

function ContactsTable() {
  const { newData, setNewData } = useContext(PhBookContext);

  useEffect(() => {
    console.log('useEffect')
    if (newData.shouldRender === true) setNewData({ shouldRender: false });
  }, [newData, setNewData]);
  
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ marginTop: "2em" }}
    >
      <ContactsData />

    </Grid>
  );
}

export default ContactsTable;
