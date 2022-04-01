import { Box, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useContext, useEffect } from 'react';
import PhBookContext from '../context/PhBookContext';
import ContactCard from './ContactCard';

function ContactsTable() {
  const { newData, setNewData } = useContext(PhBookContext);

  useEffect(() => {
    if (newData.shouldRender === true) setNewData({ shouldRender: false });
  }, [newData, setNewData]);
  
  const theme = useTheme();
  const isBig = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={{ marginTop:[isBig ? '5em' : '3em'] }}>

      <ContactCard />

    </Box>
  );
}

export default ContactsTable;
