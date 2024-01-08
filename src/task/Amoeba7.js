import React, { Component } from 'react'
import './Amoeba7.scss'
import { FaTwitter, FaFacebook , FaInstagram ,FaLinkedin} from "react-icons/fa";
import { FaLocationDot ,FaMobile} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export class Amoeba7 extends Component{
    render(){
        return(
            <div className='headline'>
            <div className='container'>
            
               
                <h1>Contact Us</h1>
                <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            <div className='row'>
             <div className='col-4 col-sm-12 col-md-6'>
            <div className='details'>
                <h2>Amoeba</h2>
                <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
               
                </div>
                <FaTwitter style={{fontSize:'20px',color:'#79c7cf', marginTop:'40px' ,marginLeft:'40px'}}/> <FaFacebook style={{fontSize:'20px',color:'#79c7cf'}}/>  < FaInstagram style={{fontSize:'20px',color:'#79c7cf'}}/> <FaLinkedin style={{fontSize:'20px',color:'#79c7cf'}}/>

            </div>

            <div className='col-2 col-sm-12 col-md-6'>
            <div className='add'>
            <h6> <FaLocationDot style={{ fontSize:'30px',color:'#79c7cf'}} />A108 Adam Street New York, NY 535022</h6>
            <h6><MdEmail style={{ fontSize:'30px',color:'#79c7cf'}} /> info@example.com</h6>
             <h6><FaMobile style={{ fontSize:'30px',color:'#79c7cf', lineHeight: '60px'}}/> +1 5589 55488 55s</h6>
               </div>
                </div>

                <div className='col-6 form-position col-sm-12 col-md-12'>
                    <div className='col-12'>
            <div className='form'>
               <input type='text' placeholder='Your Name' required className='input-style'/>
               
                </div>
                </div>

                <div className='col-12'>
            <div className='form'>
               <input type='text' placeholder='Your Email' required className='input-style'/>
               
                </div>
                </div>  
                <div className='col-12'>
            <div className='form'>
               <input type='text' placeholder='Subject' required className='input-style'/>
               
                </div>
                </div>


                <div className='col-12'>
            <div className='form'>
            <textarea rows="8" cols="50" name="subject" form="usrform" placeholder='Message' className="input-style"/>
               
                </div>
                </div>


                <div class="col-12">
<div class="button-set">
<button class="button"> send message</button>
</div>
</div>

                </div>
            </div>
           
             
          
            </div>
            </div>
        )
    }
}