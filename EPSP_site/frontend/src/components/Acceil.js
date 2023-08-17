import React, { Fragment } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import aboutImage from '../assets/images/recruitment.jpg';
import Grid from '@mui/material/Grid';
import FeaturedPost from './sections/FeaturedPostes';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Sidebar from './sections/SideBar';
import getAllSlidingImages from '../actions/SlidingImagesOps'
import getLastListArticle from '../actions/ArticleOps'

const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];

  const featuredPosts = [
    {
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

  const sidebar = {
    archives: [
      { title: 'Usful link one', url: '#' },
      { title: 'Usful link two', url: '#' },
      { title: 'Usful link three', url: '#' },
      { title: 'Usful link four', url: '#' },
      { title: 'Usful link five', url: '#' },
    ],
  };

const Acceil = () => {


  const [slidingData, setSlidingData] = React.useState([]);
  const [lastArticlesData, setLastArticlesData] = React.useState([]);



  React.useEffect(() =>{
    const fetchData = async () => {
      try {
        setLastArticlesData(await getLastListArticle())
        setSlidingData(await getAllSlidingImages());
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData()
  },[]);


  console.log(slidingData);
  console.log(lastArticlesData);

    return(
        
        <Fragment>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="slide-container">
                <Slide>
                    {slideImages.map((slideImage, index)=> (
                        <div key={index}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                                
                            </div>
                        </div>
                    ))} 
                </Slide>
            </div>
            <div className='bg-light'>
            <div className='container'>
                <div className='container pt-2 pb-5'>
                    <div className='section-header pt-5 pb-5 text-center'>
                    <h3 className='section-title'>
                        <span>Our </span>Company
                    </h3>
                    <h6 className='section-subtitle mr-auto ml-auto'>
                        Individualized quality care that meets the total needs of the
                        patient Individualized quality care that quality care that
                        Individualized quality care that meets the total.
                    </h6>
                    </div>
                    <div className='section-content'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6 mb-3'>
                        <div className='aboutImage'>
                            <img src={aboutImage} width="300" height="300"  />
                        </div>
                        </div>
                        <div className='col-md-12 col-lg-6'>
                        <h3 className='about-title'>About us</h3>
                        <div className='about-description'>
                            <p>
                            Curabitur aliquet quam id dui posuere blandit. Donec
                            sollicitudin molestie malesuada Pellentesque ipsum id orci
                            porta dapibus. Vivamus suscipit tortor eget felis porttitor
                            volutpat.
                            </p>
                            <p>
                            Neque porro quisquam est, qui dolorem ipsum quia dolor , sed
                            quia non numquam eius modi tempora incidunt ut labore et
                            dolore magnam aliquam quaerat voluptatem. Nisi ut aliquid ex
                            ea commodi consequatur?
                            </p>
                            <p>
                            Quis autem vel eum iure reprehenderit qui in ea voluptate
                            velit esse quam nihil molestiae consequatur, vel illum qui
                            dolorem eum fugiat quo voluptas nulla pariatur
                            </p>
                            <button className='btn btn-primary rounded-0'>Read More</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Grid item xs={8}>
                    <Typography variant="h6" gutterBottom>
                            Last articles
                          </Typography>
                       <Divider />
                       {lastArticlesData.map((article) => (
                          <FeaturedPost key={article.id} post={article} />
                        ))}
                       

                    </Grid>
                    <Grid item xs={4}>
                      <Sidebar archives={sidebar.archives}/>                        
                    </Grid>
                </Grid>

            </div>
            </div>

            <br/>
            <br/>
            
        </Fragment>
    );
};


export default Acceil;