import React, { Fragment } from 'react';
import { useLocation } from "react-router-dom";
import Article from './sections/Article';
import { getSelectedArticle } from '../actions/ArticleOps';



const ArticleDetails = () =>{

    
    const { state } = useLocation();
    
    const [articleData, setArticleData] = React.useState([]);

    console.log(state.id);
    
    console.log(articleData);


    React.useEffect(() =>{
        const fetchData = async () => {
          try {
            setArticleData(await getSelectedArticle(state.id));
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
            <br/>
            <div className='bg-light'>
                <div className='container'>
                        <Article art={articleData}/>
                </div>

            </div>

            
            <br/>
            <br/>   




        </Fragment>


    );


};



export default ArticleDetails;