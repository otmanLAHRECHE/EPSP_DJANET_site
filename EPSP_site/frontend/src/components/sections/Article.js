import * as React from 'react';
import { Document, Page } from 'react-pdf';
import Test from './pdf';
function Article(props){

    const {art} = props;

    const link = "http://localhost:8000/" + art.file;
    return(

        <div className='col-md-8 blog-main'>
                        <h3 className="pb-3 mb-4 font-italic border-bottom">
                               Article pour {art.article_type}
                        </h3>
            <div className="blog-post">
            <h2 className="blog-post-title"> {art.title} </h2>
            <p className="blog-post-meta"> Date de {art.date} <a> par admin</a></p>

            <p> {art.desc} </p>

            <br/>
            <br/>
            <a href = {link} target = "_blank">Download File</a>
            <br/>
            <div>
                <Test file={link}/>
        </div>
            </div>
        </div>





    );
};




export default Article;