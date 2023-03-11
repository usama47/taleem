import React from 'react'
import { dataArray } from './utils';
import Box from '@mui/joy/Box';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PDFFile from '../assets/pdf/resume.pdf'

const SurahDetails = () => {
  return (
    <>
      <Typography gutterBottom variant="h5" component="div" mt={10}>
        Tafseer in Video Format:
      </Typography>
      <Grid container margin="20px">
        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
          {dataArray.filter((item, key) => key < 2).map((item, key) => {
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
      <Typography gutterBottom variant="h5" component="div" mt={10}>
        Tafseer in Audio Format:
      </Typography>
      <Grid container margin="20px">
        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >{dataArray.filter((item, key) => key < 2).map((item, key) => {
          return (
            <Card sx={{ maxWidth: 345 }} key={key}>
              <div style={{ display: 'flex', justifyContent: "center" }}>
                
                <audio
                  controls
                  width={"100%"}
                  height={"100%"}
                >
                  <source
                    src={item.url}
                    type="audio/ogg"
                  />
                </audio>
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
      <Typography gutterBottom variant="h5" component="div" mt={10}>
        Tafseer in PDF Format:
      </Typography>
      <Grid container margin="20px">
        <Box
          component="ul"
          sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
        >
          {dataArray.filter((item, key) => key < 2).map((item, key) => {
            return (
              <Card sx={{ maxWidth: 345 }} key={key}>
                <div style={{ display: 'flex', justifyContent: "center" }}>
                  <a href={PDFFile}>Tafseer PDF</a>
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
    </>
  )
}

export default SurahDetails