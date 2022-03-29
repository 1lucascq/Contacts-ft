import React, { useState, useContext } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import { Box } from '@mui/material';
import PhBookContext from '../context/PhBookContext';
import EditInputSection from './EditInputSection';

export default function EditDataButton() {
  const [open, setOpen] = useState(false);
  // const { data, setEditData, setEditing } = useContext(PhBookContext);

  // function editBtn(id) {
  //   const contact = data.find((cont) => cont.id === id);
  //   setEditData(contact);
  //   setEditing(true);
  // }

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


// return (
//   <div>
//     <IconButton variant="outlined" onClick={handleClickOpen} />
//     <Dialog open={open} onClose={handleClose}>
//       <DialogContent>

//         <TextField
//           autoFocus
//           margin="dense"
//           id="name"
//           label="Email Address"
//           type="email"
//           fullWidth
//           variant="standard"
//         />
//       </DialogContent>
//       <DialogActions>
//         <Button onClick={handleClose}>Cancel</Button>
//         <Button onClick={handleClose}>Subscribe</Button>
//       </DialogActions>
//     </Dialog>
//   </div>
// );
// }