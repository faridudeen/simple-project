import React, { Component } from "react";
import './Amoeba5.scss'
import pic1 from "./images/portfolio/portfolio-1.jpg"
import pic2 from "./images/portfolio/portfolio-2.jpg"
import pic3 from "./images/portfolio/portfolio-3.jpg"
import pic4 from "./images/portfolio/portfolio-4.jpg"
import pic5 from "./images/portfolio/portfolio-5.jpg"
import pic6 from "./images/portfolio/portfolio-6.jpg"
import pic7 from "./images/portfolio/portfolio-7.jpg"
import pic8 from "./images/portfolio/portfolio-8.jpg"
import pic9 from "./images/portfolio/portfolio-9.jpg"


export class Amoeba5 extends Component{
 render(){

   let images =[pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9]

        let list = ['all','app','card','web']
        return(
            <div className="container">
          
                <div className="min-box col-sm-12 col-md-12"> 
                <h1>Our Portfolio</h1>
                    <ul>

                  
                  {  list.map((v)=>{
                        return <li>{v}</li>
                  
                  } ) }
                  
                    </ul>
                </div>
                
             <div className="row">
         
             { images.map((v)=>{

                    return  <div className="col-4 col-sm-12 col-md-6">
                    <img src ={v} style={{width:'100%',borderRadius:'5px'}} alt="pic9" />
                </div>
               
                    
              
                  })}
          

             </div>
            
            </div>
        )
    }
}