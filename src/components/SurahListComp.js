import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { useNavigate } from 'react-router-dom';

function SurahListComp(props) {
  const { post } = props;
  const navigate = useNavigate();
  
  return (
    // <Grid item xs={12} md={6} mb={2}>
    <>
      <CardActionArea component="a" onClick={() => navigate('/surahDetails')}>
        <Card sx={{ display: 'flex' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
          </CardContent>
        </Card>
      </CardActionArea>
      </>
    // </Grid>
  );
}

export default SurahListComp;
