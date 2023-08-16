import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


function Sidebar(props) {
    const { archives, description, social, title } = props;
  
    return (
      <Grid item>
        <Paper elevation={0} sx={{ p: 2, bgcolor: 'grey.200' }}>
          <Typography variant="h6" gutterBottom>
            Covid19 Notice
          </Typography>
          <Typography>This message will find you This message will find you This message will find you This message will find you</Typography>
        </Paper>
        <Typography variant="h6" gutterBottom sx={{ mt: 3 }}>
          Usful links
        </Typography>
        {archives.map((archive) => (
          <Link display="block" variant="body1" href={archive.url} key={archive.title}>
            {archive.title}
          </Link>
        ))}
      </Grid>
    );
  }



  export default Sidebar;