import React, { useState, useContext } from 'react';
import PhBookContext from '../context/PhBookContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addContact, editContact } from '../helpers/fetchFunctions';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import CheckIcon from '@mui/icons-material/Check';



const style = { 
  width: '16em',
  height: '10em',
  bgcolor: '#878787',
  '&:hover': {
    backgroundColor: '#555555',
    opacity: [0.9, 0.8, 0.7],
  },
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '2px solid #000',
  borderRadius: 7,
  boxShadow: 39,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}


export default function SaveButton(newContact, id) {
  const { editing, setEditing, setNewData } = useContext(PhBookContext);
  const [open, setOpen] = useState(false);
  const [resMessage, setResMessage] = useState('');


  async function handleClick() {
    const res = editing ? await editContact(newContact, id) : await addContact(newContact);
    if (res.message) {
      setResMessage(res.error || res.message.message)

    } else {
      
      setResMessage('Dados Salvos!')
    }
    setOpen(true);
    if (editing){
      setEditing(false);
    }
    setNewData({ shouldRender: true})
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick} sx={{ marginTop: 2 }}>
        Save 
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}
         onClick={handleClose}>
          <Typography id="modal-modal-description" color="black" sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <CheckIcon />
            {resMessage}
          </Typography>
        </Box>
      </Modal>


    </Stack>
  );
}
