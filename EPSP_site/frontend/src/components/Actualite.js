import React, { Fragment } from 'react';
import Grid from '@mui/material/Grid';
import FeaturedPost from './sections/FeaturedPostes';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import getListArticle from '../actions/ArticleOps';

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  
const Actualite = () =>{

  const [lastArticlesData, setLastArticlesData] = React.useState([]);
  

  React.useEffect(() =>{
    const fetchData = async () => {
      try {
        setLastArticlesData(await getListArticle());
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData()
  },[]);

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
                        {lastArticlesData.map((article) => (
                          <FeaturedPost key={article.id} post={article} />
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