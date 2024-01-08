import React from "react";
import './grid.css'
import './Amoeba1.scss'
import './responesive.css'
import { FiAlignJustify } from "react-icons/fi";
import { isVisible } from "@testing-library/user-event/dist/utils";
export const Amoeba1 =()=>{
    let nav =['home','About',"service","portfollo","team","drop down ","contact us"]

    return (
       
        <div className="header-block">
            <header className="header">
            <div className="container">
            <div className="row position">
                <div className="col-4 col-sm-6   col-md-6 ">
            <div className="icon">
                <h1>Amoeba</h1>
                </div>
                </div>
               
               <div className="col-8 d-none">
               <div className="list"> 
                <ul>
               {
                nav.map((v,i)=>{
              return   <li><a href="1">{v}</a></li>

                })
               }

                </ul> 
                </div>
                
                </div>
                <div className=" col-sm-6   col-md-6">
             <div className=" dis-icons">
             <h1> <FiAlignJustify/></h1>
             </div>
             
             </div>
                </div>
                </div>
            </header>
        </div>
       

        
    )
}