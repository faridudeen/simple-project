import React from "react";

import './Amoeba3.scss';
import g from '../task/images/about-img.jpg'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";




export const Amoeba3 = ()=>{
  let icon =[{a:'Ullamco laboris nisi ut aliquip ex ea commodo consequat.'},
  {b:'Duis aute irure dolor in reprehenderit in voluptate velit.'}

 , {c:'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur'}
           
]
    return (
        <div className="container">
        <div className=" head">
       <h1>About Us</h1>
    <div className="row">
       <div className="col-6 col-sm-12 col-md-12">
       <div className="content">
        <h4>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h4>
        <h6><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</em></h6>
                
     {  icon.map((v,i)=>{
        return   <p><IoMdCheckmarkCircleOutline style={{  color:'#79c7cf',fontSize:'22px',marginRight:'5px'}}/>{v.a}{v.b}{v.c}</p>
                  
       }) 
       }
        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
       </div>
       </div>
      

      <div className="col-6 col-sm-12 col-md-12">
        <div className="img">

      <img src = {g} style = {{width:'100%',height:'auto',paddingTop:'20px'}} alt="group-pic"/>
                </div>
      </div>
       </div>
              </div>
        </div>
        
    )
}