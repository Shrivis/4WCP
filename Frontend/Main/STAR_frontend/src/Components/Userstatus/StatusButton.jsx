import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export default function StatusButton({data}) {
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
        {
            `${data.status}` === 'Approved'? <CheckCircleIcon color="success" />:
            `${data.status}` === 'Rejected'? <CancelIcon color='error' />:
            <PendingActionsIcon color='warning'/>
        }
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText>
            {data.responseText}
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}