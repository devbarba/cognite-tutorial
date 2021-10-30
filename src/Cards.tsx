import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Datas from '../src/assets/data.json'
import CogniteCard from './assets/styles'

export default function BasicCard() {
  return (
    <Grid container spacing={2} padding={2}>
      {Datas.devteam.map((data, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
         <CogniteCard>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2">
                {data.name}
              </Typography>
              <Typography variant="body2" component="p">
                {data.department}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary">
              {data.country}
              </Button>
            </CardActions>
          </Card>
          </CogniteCard>
        </Grid>
      ))}
   
  </Grid>
  );
}
