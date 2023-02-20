import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import axios from 'axios';

export default function AcceptRejctButton({data, id}) {
  const [open, setOpen] = React.useState(false);
  const [resText, setResText] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleInputChange = (event) => {
    // debugger;
    setResText(event.target.value);
    console.log(resText);
  };

  const handleClose = (isApproved) => {
    
    console.log('hedfadrde');
    const formData = {
      'id':data.id,
      'userId':id,
      'responseText':resText,
      'isApproved':isApproved
    };
    const options = {
        method: 'POST',
        url: 'http://localhost:8084/api/v1/request/manager',
        headers: {
          Authorization : `Bearer ${localStorage.getItem("token")}`,
          'Access-Control-Allow-Origin': '*'
        },
        data: formData,
    };
    axios.request(options)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
    
    setOpen(false);
  };

  return (
    <div>
      <Button class="mt-1 btn " onClick={handleClickOpen}>
        <PendingActionsIcon color='warning'/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            Give a brefi insight as to why you are accepting or rejecting this request
          </DialogContentText>
          <TextField autoFocus label="message" type="text" onChange={handleInputChange} fullWidth variant="standard"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose(false)}><CancelIcon color='error' fontSize='large' /></Button>
          <Button onClick={() => handleClose(true)}><CheckCircleIcon color='success' fontSize='large'/></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}