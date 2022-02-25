// Recebe os componentes de adição/edição de dados e os InputFields.

import React, { useContext, useState } from 'react';
import { FormControl, Grid } from '@mui/material';
import PhBookContext from '../context/PhBookContext';
import InputField from './InputField';
import SendBtn from './SendButton';

export default function EditInputSection() {
  const { editData, data } = useContext(PhBookContext);
  
  const { name, email, image } = editData;
  const phone = editData.phoneNumbers[0];
  const { id } = data.find((cont) => cont.name.toLowerCase() === name.toLowerCase());
  const [edName, setEdName] = useState(name);
  const [edEmail, seEdtEmail] = useState(email);
  const [edImage, seEdtImage] = useState(image);
  const [edPhone, seEdtPhone] = useState(phone);
  
  const newContact = { edName, edEmail, edImage, edPhone }
  return (
    <div>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <FormControl>
          <InputField value={edName} fieldName="Name" setValue={setEdName} />
          <InputField value={edEmail} fieldName="Email" setValue={seEdtEmail} />
          <InputField value={edImage} fieldName="Image" setValue={seEdtImage} />
          <InputField value={edPhone} fieldName="Phone" setValue={seEdtPhone} />
          <SendBtn newContact={ newContact } id={ id } />
        </FormControl>
      </Grid>
    </div>
  );
}
