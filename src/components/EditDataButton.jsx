import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import EditInputSection from './EditInputSection';

export default function EditDataButton() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box variant="outlined" onClick={handleClickOpen}>
        <EditIcon />
      </Box>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <EditInputSection />
        </DialogContent>
      </Dialog>
    </>
  );
}
