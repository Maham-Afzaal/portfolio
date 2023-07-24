import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
const ModalComponent = ({ imageSrc, onClose }) => {
  return (
    <Dialog open={true} onClose={onClose}sx={{
      // '& .MuiDialog-root':{
      //   m:'0px',
      // },
      '& .MuiDialog-paper':{
        m:'0px'
     },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            zIndex: 1,
            backgroundColor: 'red', // Set the background color
            color: 'white', // Set the icon color
            '&:hover': {
              backgroundColor: '#212529', // Set the background color on hover
              color: '#f8f9fa', // Set the icon color on hover
            },
          }}
        >
          <Close />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{m:0,p:0,}}>
        <img src={imageSrc} alt="Image"  style={{ width: '100%', height: 'auto', maxWidth: '100%' }}
 />
      </DialogContent>
    </Dialog>
  );
};

export default ModalComponent;
