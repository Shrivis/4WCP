import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {   
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined, } from '@ant-design/icons';
import { Tag } from 'antd';
import { useState } from 'react';
import axios from 'axios';

export default function AcceptRejctButton({timesheetId, managerId, userId}) {
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
      'id':timesheetId,
      'userId':managerId,
      'responseText':resText,
      'isApproved':isApproved
    };
    const emailData = {
      'id':timesheetId,
      'managerId': managerId,
      'userId': userId,
      'responseText': resText,
      'isApproved': isApproved,
    };
    const mailOption = {
      method: 'POST',
      url: 'http://localhost:8084/api/v1/request/sendmail',
      headers: {
        Authorization : `Bearer ${localStorage.getItem("token")}`,
        'Access-Control-Allow-Origin': '*'
      },
      data: emailData,
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
      axios.request(mailOption).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error);
      });
      setOpen(false);
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

  };




  return (
    <div>
      <Button class="mt-1 btn " onClick={handleClickOpen}>
        <Tag icon={<ClockCircleOutlined />} color="default" className='py-1'>Action</Tag>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DialogContentText >
            Give a brefi insight as to why you are accepting or rejecting this request
          </DialogContentText>
          <TextField autoFocus label="message" type="text" onChange={handleInputChange} fullWidth variant="standard"/>
        </DialogContent>
        <DialogActions>
          <Button class="btn" onClick={() => handleClose(true)}>
            <Tag icon={<CheckCircleOutlined/>} color="success" className='py-1 px-2'>Accept</Tag>
          </Button>
          <Button class="btn" onClick={() => handleClose(false)}>
            <Tag icon={<CloseCircleOutlined/>} color="error" className='py-1 px-2'>Reject</Tag>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}