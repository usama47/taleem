
import * as React from 'react';
import Box from '@mui/joy/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {dataArray} from './utils';

const theme = createTheme();
export const Videos = () => {
  return (
    <Grid container margin="20px">
      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      >
        {dataArray.map((item,key) => {
          return (
          <Card sx={{ maxWidth: 345 }} key={key}>
            <div style={{ display: 'flex', justifyContent: "center" }}>
              <video
                controls
                width={"100%"}
                height={"100%"}
              >
                <source
                  src={item.url}
                  type="video/mp4"
                />
              </video>
            </div>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.detail}
              </Typography>
            </CardContent>
          </Card>

          )
        })}
      </Box>
    </Grid>
  );
}