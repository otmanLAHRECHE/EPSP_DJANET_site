import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';


function FeaturedPost(props) {
    const { post } = props;
  
    return (
          <Card sx={{ display: 'flex' , mt: 1, mb: 1}}>
            <CardContent sx={{ flex: 1 }}>
              <Typography component="h2" variant="h5">
                {post.title}
              </Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {post.date}
              </Typography>
              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>

            <Chip label={post.type} />
            <Button size="small">Learn More</Button>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
              image={post.image}
              alt={post.imageLabel}
            />
          </Card>
    );
  }
  


  export default FeaturedPost;