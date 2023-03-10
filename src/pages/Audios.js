import React from 'react'
import SurahListComp from '../components/SurahListComp';
import Box from '@mui/joy/Box';
import { Grid } from '@mui/material';

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];


export const Audios = () => {
  return (
    <Grid container margin="20px">
    <Box
      component="ul"
      sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
    >
  { featuredPosts.map((post) => {
      return (
        <SurahListComp key={post.title} post={post}  />
      )
    })}
  </Box>
  </Grid>
  )
}
