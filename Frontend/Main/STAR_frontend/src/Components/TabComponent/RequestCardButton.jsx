import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
export default function AcceptRejctButton({data, id}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button class="mt-1 btn " onClick={handleClickOpen}>
        <PendingActionsIcon color='warning'/>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        {/* <DialogTitle>Desion Panel</DialogTitle> */}
        <DialogContent>
          <DialogContentText>
            Give a brefi insight as to why you are accepting or rejecting this request
          </DialogContentText>
          <TextField autoFocus id="responseText" label="message" type="text" fullWidth variant="standard"/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}><CancelIcon color='error' fontSize='large' /></Button>
          <Button onClick={handleClose}><CheckCircleIcon color='success' fontSize='large'/></Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}