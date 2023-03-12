import React from "react";
import Card from '@mui/material/Card';
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import PendingIcon from '@mui/icons-material/Pending';
export default function ImgMediaCard({count}) {
  return (
    <div className='col-md-4 col-sm-12 col-12'>
      <Card>
        <CardHeader
          avatar={
            <PendingIcon color="warning" fontSize="large" />
          }
          action={
            <IconButton aria-label="settings">
              {count}
            </IconButton>
          }
          title="Pending"
          subheader="The pending request count is"
        />
      </Card>
    </div>
  );
}
