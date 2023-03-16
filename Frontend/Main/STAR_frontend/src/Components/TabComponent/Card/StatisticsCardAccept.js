import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function ImgMediaCard({count}) {
  return (
      <Card>
        <CardHeader
          avatar={
              <CheckCircleIcon color="success" fontSize="large"/>
          }
          action={
            <Avatar color="warning" className='mt-2 text-dark' style={{ backgroundColor: '#fff' }} fontSize="large" >
              {count}
            </Avatar>
          }
          title="Approved"
          subheader="The approved reqeust count is"
        />
      </Card>
  );
}
