import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';

function ExtractImageName(name) {
  
  return name;
}

function FeaturedPost(props) {
    const { post } = props;


    console.log(post.small_image.substring(1));

    //const logo = post.small_image.substring(1);
    const logo = "/media/images_art/images.jpg";

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
                {post.desc}
              </Typography>

            <Chip label={post.article_type} />
            <Button size="small">Learn More</Button>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, height: 200, display: { xs: 'none', sm: 'block' } }}
              src={require(`${logo}`).default}
              //src={process.env.PUBLIC_URL + "/media/images_art/images.jpg"}
            />
          </Card>
    );
  }
  


  export default FeaturedPost;