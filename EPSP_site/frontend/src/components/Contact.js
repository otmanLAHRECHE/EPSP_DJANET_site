import React, { Fragment } from 'react';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import { createMessage } from '../actions/MessegesOps';


const Contact = () =>{

    const [name,setName] = React.useState("");
    const [email,setEmail] = React.useState("");
    const [message,setMessage] = React.useState("");

    const sendMessage = () =>{
        if(name != "" && email != "" && message != ""){
            const data = {
                name:name,
                email:email,
                message:message,
              }

              createMessage(JSON.stringify(data));
              console.log("message send..");
        }else{
            
            console.log("error..");
        };
        
    };



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
                        <div className='container pt-2 pb-5'>
                    <div className='section-header pt-5 pb-5 text-center'>
                    <h3 className='section-title'>
                        <span>Contact </span>Us
                    </h3>
                    <h6 className='section-subtitle mr-auto ml-auto'>
                        Individualized quality care that meets the total needs of the
                        patient Individualized quality care that quality care that
                        Individualized quality care that meets the total.
                    </h6>
                    </div>
                    <div className='row'>
                        <div className='col-md-9 col-lg-7 mr-auto ml-auto'>
                            <TextField fullWidth  label="Nom" variant="standard" onChange={(event) => {setName(event.target.value)}}/>
                    
                            <TextField fullWidth  label="Email" variant="standard" onChange={(event) => {setEmail(event.target.value)}}/>
                            
                            <TextField fullWidth  multiline rows={4} label="Message" variant="standard" onChange={(event) => {setMessage(event.target.value)}}/>
                            
                            <br/>
                            <br/>
                            <div>
                            <Button fullWidth variant="outlined" onClick={sendMessage}>Envoiyer</Button>

                            </div>
                        </div>
                    </div>
                        </div>
                    
                        <div>
                            <iframe
                            title='mapMarker'
                            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1176.568425188778!2d9.484419263801314!3d24.553512232574544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sdz!4v1692182126144!5m2!1sen!2sdz"
                            width='100%'
                            height='450'
                            frameBorder='0'
                            style={{ border: 0, marginBottom: '-7px' }}
                            allowFullScreen
                            />


                        </div>

                </div>

            </div>

            <br/>
            <br/>

        </Fragment>

    );
};



export default Contact;