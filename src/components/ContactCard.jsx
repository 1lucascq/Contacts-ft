// Card de cada contato.
import DeleteIcon from '@mui/icons-material/Delete';
import { Card, CardContent, CardMedia, Grid, IconButton, Typography, useTheme } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import PhBookContext from '../context/PhBookContext';
import { deleteContact } from '../helpers/fetchFunctions';
import EditDataButton from './EditDataButton';


export default function ContactCard() {
  const { data, setData, setEditData, setEditing, query } = useContext(PhBookContext);
  
  function handleEditBtn(id) {
    const contact = data.find((cont) => cont.id === id);
    setEditData(contact);
    setEditing(true);
  }

  async function deleteBtn(id) {
    await deleteContact(id)
    const newData = data.filter((contact) => contact.id !== id);
    setData(newData);
  }

  function loadData(){
    if (query.length) return data.filter((contact) => contact.name.toLowerCase().includes(query.toLowerCase()));
    return data;
  }
  
  const theme = useTheme();
  const isBig = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Grid
      container 
      spacing={{ xs: 2, md: 3, lg: 9 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      px={[isBig && '8em']}
      justifyContent='center'
    >
    {loadData().map(({ id, name, email, image, phoneNumbers }, i) => (

    <Card key={i} sx={{ display: 'flex', margin: '0.2em', marginLeft: '1.2em', borderRadius: 5 }}>
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image={image}
        alt={`${name} profile picture`}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
        <CardContent sx={{ flex: '1 0 auto', width: '13em', height: '9.3em' }}>
          <Typography component='div' variant='h5'>
            {name}
          </Typography>
          <Typography variant='subtitle2' color='text.secondary' component='div' noWrap>
            {email}
          </Typography>
          {phoneNumbers.map((n, i) => {
              return (
                <Typography variant='subtitle2' color='text.secondary' component='div' key={name + i}>
                {n}
                </Typography>
                )
            })}
        </CardContent>
        
        <Box sx={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 1
          }}>
          <IconButton aria-label='delete' id={id} onClick={({ target }) => deleteBtn(id)} >
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label='edit' id={id} onClick={({ target }) => handleEditBtn(id)} >
            <EditDataButton />
          </IconButton>
        </Box>
      </Box>
    </Card>
    ))}
  </Grid>


  );
}
