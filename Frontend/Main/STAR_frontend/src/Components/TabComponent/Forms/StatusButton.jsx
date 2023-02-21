import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';

export default function StatusButton({status}) {
  console.log(status);
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
          (status.status === 'Approved') ? (<Tag icon={<CheckCircleOutlined />} color="success" className="py-2">{status.status}</Tag>):
          (status.status === 'Rejected') ? (<Tag icon={<CloseCircleOutlined />} color="error">{status.status}</Tag>):
          (<Tag icon={<ClockCircleOutlined />} color="warning" className="py-1">{status.status}</Tag>)
        }
      </Button>
      <Dialog open={open} onClose={handleClose}>
      <div className="d-flex justify-content-start">
        <DialogContent>
            <Button onClick={() => handleClose(false)}>X</Button>
            {status.responseText}
        </DialogContent>
      </div>
      </Dialog>
    </div>
  );
}