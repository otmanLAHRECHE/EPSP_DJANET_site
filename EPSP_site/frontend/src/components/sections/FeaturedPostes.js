import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Chip from '@mui/material/Chip';
import { useNavigate } from "react-router-dom";



function FeaturedPost(props) {
    const { post } = props;
    const navigate = useNavigate();

    const learnMore = () =>{
      console.log("Going to...=>"+ post.id);
      navigate("/ArticleDetails",{
        state: {
          id: post.id
        }
      });
      window.scrollTo(0, 0);
    };

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
                {post.desc.slice(0, 140) + "..."}
              </Typography>

            <Chip label={post.article_type} />
            <Button size="small" onClick={learnMore}>Learn More</Button>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 160, height: 200, display: { xs: 'none', sm: 'block' } }}
              src={"http://localhost:8000/"+post.small_image}
            />
          </Card>
    );
  }
  


  export default FeaturedPost;