// Recebe os componentes de adição/edição de dados e os InputFields.

import React, { useContext, useState } from 'react';
import { FormControl, Grid } from '@mui/material';
import PhBookContext from '../context/PhBookContext';
import InputField from './InputField';
import SaveButton from './SaveButton';

export default function EditInputSection() {
  const { editData } = useContext(PhBookContext);
  console.log('EditInputSection')
  const { name, email, image, id } = editData;
  const phone = editData.phoneNumbers[0];
  const [editName, setEditName] = useState(name);
  const [editEmail, setEditEmail] = useState(email);
  const [editImage, setEditImage] = useState(image);
  const [editPhone, setEditPhone] = useState(phone);
  
  const newContact = { editName, editEmail, editImage, editPhone }
  return (
    <div>
      <Grid container direction="column" alignItems="center" justifyContent="center">
        <FormControl>
          <InputField value={(editName).toString()} fieldName="Name" setValue={setEditName} />
          <InputField value={(editEmail).toString()} fieldName="Email" setValue={setEditEmail} />
          <InputField value={(editImage).toString()} fieldName="Image" setValue={setEditImage} />
          <InputField value={(editPhone).toString()} fieldName="Phone" setValue={setEditPhone} />
          <SaveButton newContact={ newContact } id={ id } />
        </FormControl>
      </Grid>
    </div>
  );
}
