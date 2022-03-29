import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function MediaControlCard() {
  return (
    <Card sx={{ display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="data:image/jpeg;base64,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"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        
        <CardContent sx={{ flex: '1 0 auto', minWidth: '14em', minHeight: '9.3em' }}>
          <Typography component="div" variant="h5">
            Bruce Wayne
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            brucewayne@gmail.com
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            (38) 99933-4321
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            (38) 3212-3223
          </Typography>
        </CardContent>
        
        <Box sx={{ 
          display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 1
          }}>
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="edit">
            <EditIcon />
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

{/* <Card sx={{ display: 'flex' }}>
<CardMedia
  component="img"
  sx={{ width: 151 }}
  image="data:image/jpeg;base64,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"
  alt="Live from space album cover"
/>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
  
  <CardContent sx={{ flex: '1 0 auto', minWidth: '14em', minHeight: '9.3em' }}>
    <Typography component="div" variant="h5">
      Bruce Wayne
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      brucewayne@gmail.com
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      (38) 99933-4321
    </Typography>
    <Typography variant="subtitle1" color="text.secondary" component="div">
      (38) 3212-3223
    </Typography>
  </CardContent>
  
  <Box sx={{ 
    display: 'flex', alignItems: 'center', justifyContent: 'space-around', pl: 1, pb: 1
    }}>
    <IconButton aria-label="delete">
      <DeleteIcon />
    </IconButton>
    <IconButton aria-label="edit">
      <EditIcon />
    </IconButton>
  </Box>
</Box>
</Card>
);
} */}