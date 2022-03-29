// Recebe os componentes de adição/edição de dados e os InputFields.

import React, { useContext, useState } from 'react';
import { FormControl, Grid } from '@mui/material';
import PhBookContext from '../context/PhBookContext';
import InputField from './InputField';
import SaveButton from './SaveButton';

export default function EditInputSection() {
  const { editData, data } = useContext(PhBookContext);
  
  const { name, email, image } = editData;
  const phone = editData.phoneNumbers[0];
  const { id } = data.find((cont) => cont.name.toLowerCase() === name.toLowerCase());
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editImage, setEditImage] = useState(image);
  const [editPhone, setEditPhone] = useState(phone);
  
  console.log('EIS - editName', editName);

  const newContact = { editName, editEmail, editImage, editPhone }
  return (
    <div>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <FormControl>
          <InputField value={editName} fieldName="Name" setValue={setEditName} />
          <InputField value={editEmail} fieldName="Email" setValue={setEditEmail} />
          <InputField value={editImage} fieldName="Image" setValue={setEditImage} />
          <InputField value={editPhone} fieldName="Phone" setValue={setEditPhone} />
          <SaveButton newContact={ newContact } id={ id } />
        </FormControl>
      </Grid>
    </div>
  );
}
