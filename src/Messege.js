import {  CardContent,Typography } from '@material-ui/core';
import React,{ forwardRef } from 'react';
import './Messege.css';


const Messege = forwardRef(({username , text },ref) => {
  const isuser= username === text.username ;
  console.log(isuser);
  return (
       

<div ref={ref} className={`messege ${isuser && 'messege__user' }`}>
<CardContent >
          <Typography variant="body2" color="textSecondary" component="p">
          {!isuser && `${text.username || 'Unknown User '} `}
          </Typography>
          <Typography  className={isuser ? "Messege_user_card" : "Messege_Gest_card"} variant="h6" component="p">
          {text.messege}
          </Typography>
        </CardContent>
</div>

     
      




  )
});

export default Messege;