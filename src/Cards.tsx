import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Datas from '../src/assets/data.json'
import {CogniteCard, CogniteContent} from './assets/styles'

export default function BasicCard() {
  return (
    <Grid container spacing={2} padding={2}>
      {Datas.devteam.map((data, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
         <CogniteCard>
          <Paper style={{borderRadius : "20px"}}>
          <CogniteContent>
          <Typography variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography variant="body2" component="p">
                {data.country}
              </Typography>
            </CogniteContent>
          </Paper>
        
          </CogniteCard>
        </Grid>
      ))}
   
  </Grid>
  );
}
