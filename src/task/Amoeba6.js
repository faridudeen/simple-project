import React, { Component } from "react";
import './Amoeba6.scss'
import card1 from './images/team/team-1.jpg'
import card2 from './images/team/team-2.jpg'
import card3 from './images/team/team-3.jpg'
import { FaTwitter, FaFacebook , FaInstagram ,FaLinkedin} from "react-icons/fa";

export class Amoeba6 extends Component{
    
    render(){
      let card =[{img:card1,name:'Walter White',headline:'Chief Executive Officer',p:'Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis '},
      {img:card2,name:'Sarah Jhinson',headline:'Product Manager',p:'Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus'},
    {img:card3,name:'William Anderson',headline:'CTO',p:'Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara'}]
        return(
            <div className="container">
                <div className="team-content  col-sm-12 col-md-12"> 
                <h1>Our Team</h1>
                <p>
Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.

</p>
</div>

<div className="row">

        

        {    card.map((v)=>{
 
 return    <div className="col-4 col-sm-12 col-md-6">
 <div className="card">
  <div>  <img src ={v.img} className="card-img" alt='teamcard2'/>
 <h2>{v.name}</h2>
 <h6>{v.headline}</h6>
 <p>{v.p}</p>
 <FaTwitter style={{fontSize:'20px',color:'#79c7cf'}}/> <FaFacebook style={{fontSize:'20px',color:'#79c7cf'}}/> < FaInstagram style={{fontSize:'20px',color:'#79c7cf'}}/> <FaLinkedin style={{fontSize:'20px',color:'#79c7cf'}}/>
</div>
</div>
</div>
 
})

}
</div>
        
        
</div>
        )}}
    
    

