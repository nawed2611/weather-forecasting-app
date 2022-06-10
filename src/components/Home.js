import React from 'react'
import Typography from '@mui/material/Typography';

const Home = () => {
  return (
    <div style={{display: "flex", height: "50vh", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <Typography variant="h4">Search for any City above</Typography>
      <Typography variant="subtitle1">Weather made simple</Typography>
    </div>
  )
}

export default Home