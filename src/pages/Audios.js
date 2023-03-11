import React from 'react'
import SurahListComp from '../components/SurahListComp';
import Box from '@mui/joy/Box';
import { Grid, Typography } from '@mui/material';

const featuredPosts = [
  {
    title: 'Surah Fatiha',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
  {
    title: 'Surah Bakara',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
  },
];


export const Audios = () => {
  return (
    <Grid container margin="20px">
      <Typography gutterBottom variant="h5" component="div" mb={5} mt={10}>
        Surah List:
      </Typography>
      <Box
        component="ul"
        sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
      >
        {featuredPosts.map((post) => {
          return (
            <SurahListComp key={post.title} post={post} />
          )
        })}
      </Box>
    </Grid>
  )
}
