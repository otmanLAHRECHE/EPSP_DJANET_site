import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import FeaturedPost from './sections/FeaturedPostes';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';


const featuredPosts = [
    {
      title: 'Featured post this year of work',
      date: '26 Aout 2023',
      description:
        'This is a wider card with supporting This is a wider card with supportingtext below as a natural lead-in to additional content.',
      image: 'https://source.unsplash.com/random?wallpapers',
      imageLabel: 'Image Text',
      type: 'Covid19'
    },{
        title: 'Featured post starting ',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Information'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Recrutement'
      },{
        title: 'Featured post this year of work',
        date: '26 Aout 2023',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random?wallpapers',
        imageLabel: 'Image Text',
        type: 'Covid19'
      },{
          title: 'Featured post starting ',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Information'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },{
          title: 'Featured post',
          date: 'Nov 12',
          description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
          image: 'https://source.unsplash.com/random?wallpapers',
          imageLabel: 'Image Text',
          type: 'Recrutement'
        },
  ];

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
const Actualite = () =>{


    return(

        <Fragment>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='bg-light'>
                <div className='container'>
                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Grid item xs={10}>
                    <Typography variant="h6" gutterBottom>
                            Tous les Article
                          </Typography>
                       <Divider />
                        {featuredPosts.map((post) => (
                          <FeaturedPost key={post.title} post={post} />
                        ))}

                    </Grid>
                    <Grid item xs={2}>
                        
                                              
                    </Grid>
                </Grid>
                </div>


            </div>

            <br/>
            <br/>
        </Fragment>




    );

};



export default Actualite;