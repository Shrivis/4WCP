import React from "react";
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";
import PendingIcon from '@mui/icons-material/Pending';
import Avatar from '@mui/material/Avatar';
export default function ImgMediaCard({count, classes}) {
  return (
      <Card className={classes}>
        <CardHeader
          avatar={
            <PendingIcon color="warning" fontSize="large" />
          }
          action={
            <Avatar color="warning" className='mt-2 text-dark' style={{ backgroundColor: '#fff' }} fontSize="large" >
              {count}
            </Avatar>
          }
          title="Pending"
          subheader="The pending request count is"
        />
      </Card>
  );
}
