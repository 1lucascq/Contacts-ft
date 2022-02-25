// Recebe os componentes de adição/edição de dados e os InputFields.

import React, { useState } from 'react';
import { FormControl, Grid } from '@mui/material';
import InputField from './InputField';
import SnackBarButton from './SendButton';

export default function InputSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  
  const newContact = { name, email, image, phone }
  
  return (
    <div>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <FormControl>
          <InputField value={name} fieldName="Name" setValue={setName} />
          <InputField value={email} fieldName="Email" setValue={setEmail} />
          <InputField value={image} fieldName="Image" setValue={setImage} />
          <InputField value={phone} fieldName="Phone" setValue={setPhone} />
          <SnackBarButton newContact={ newContact } />
        </FormControl>
      </Grid>
    </div>
  );
}
