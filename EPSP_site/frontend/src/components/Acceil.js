import React, { Fragment } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
//import aboutImage from '../assets/images/recruitment.jpg';
import aboutImage from '../assets/images/epsplogo.jpg';
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
  
  const sidebar = {
    archives: [
      { title: 'DSP DJANET Site web', url: '#' },
      { title: 'EPH DJANET Site web', url: '#' },
      { title: 'La Fonction Public Site web', url: '#' },
      { title: 'Ministere de sante Site web', url: 'https://www.sante-dz.com/' },
    ],
  };

const Acceil = () => {

  const [slidingData, setSlidingData] = React.useState([]);
  const [lastArticlesData, setLastArticlesData] = React.useState([]);
  const [data, setData] = React.useState(false);

  React.useEffect(() =>{
    const fetchData = async () => {
      try {
        setSlidingData(await getAllSlidingImages());
        setLastArticlesData(await getLastListArticle());
        
        setData(true);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData()
  },[]);

  const goPresentation = () =>{
    navigate("/Presentation");
      window.scrollTo(0, 0);
  };

    return(

      
     
        
        <Fragment>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="slide-container">
              { data ? <Slide>
                    {
                    slidingData.map((img)=> (
                        <div key={img.id}>
                            <div style={{ ...divStyle, 'backgroundImage': `url(${img.image})` }}>
                                
                            </div>
                        </div>
                    ))} 
                </Slide> : null}

                
            </div>
            
            <div className='bg-light'>
            <div className='container'>
                <div className='container pt-2 pb-5'>
                    <div className='section-header pt-5 pb-5 text-center'>
                    <h3 className='section-title'>
                        <span>Notre </span>Etablissement
                    </h3>
                    <h6 className='section-subtitle mr-auto ml-auto'>
                    L ’établissement public de santé de proximité  (E.P.S.P) Djanet </h6>
                    </div>
                    <div className='section-content'>
                    <div className='row'>
                        <div className='col-md-12 col-lg-6 mb-3'>
                        <div className='aboutImage'>
                            <img src={aboutImage} width="250" height="400"  />
                        </div>
                        </div>
                        <div className='col-md-12 col-lg-6'>
                        <h3 className='about-title'>About us</h3>
                        <div className='about-description'>
                            <p>
                            L ’établissement public de santé de proximité  (E.P.S.P) de Djanet est  crée dans le cadre de la mise en œuvre  de la  nouvelle carte sanitaire  qui est régie en 2007  conformément aux dispositions  du décret exécutif  N° 07- 140 du 19 mai relative  aux  activités d’une polyclinique laquelle polyclinique, constitue une unité  de base médicalisée en matière de soins de proximité  afin de réhabiliter la  polyclinique  en tant que prescriptrice  de soins de  base, de les hiérarchiser ,de mieux répondre  aux  attentes  et aux besoins de la population, de renforcer les activités de prévention  pour  prémunir la population de toute épidémie, et de se rapprocher d’avantage de la population  jusqu‘à arriver au concept de médecin de famille.
                            </p>
                            <button className='btn btn-primary rounded-0' onClick={goPresentation}>Présentation</button>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>

                <Grid container spacing={5} sx={{ mt: 3 }}>
                    <Grid item xs={8}>
                    <Typography variant="h6" gutterBottom>
                                  Derniers articles
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