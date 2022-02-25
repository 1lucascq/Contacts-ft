import React, { useState, useContext } from 'react';
import PhBookContext from '../context/PhBookContext';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { addContact, editContact } from '../helpers/manageData';
import { Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function SendButton({ newContact, id }) {
  const { editing, setEditing } = useContext(PhBookContext);
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
  }
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Button variant="outlined" onClick={handleClick} sx={{ marginTop: 2 }}>
        Send 
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 0, textAlign: "center" }}>
            {resMessage}
          </Typography>
        </Box>
      </Modal>


    </Stack>
  );
}