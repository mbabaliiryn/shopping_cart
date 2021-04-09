import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    return(
       
       <div>
            <footer  className="footer">
           <div className="row p-3">
               <div className="col-md-4 text-center">
                   <h2>About us</h2>
                   <div className="content">
                       <p>Lorem ipsum dolor sit amet.</p>
                   </div>
                   <div className="social">
                       <a href="#"><span className="fab fa-facebook-f"></span></a>
                       <a href="#"><span className="fab fa-twitter"></span></a>
                       <a href="#"><span className="fab fa-youtube"></span></a>
                   </div>
               </div>
           </div>

           <div className="col-md-4 text-center">
               <h2>Adress</h2>
               <div className="content">
                   <div className="place">
                   <a href="#"><span className="fab fa-facebook-f"></span></a>
                   <a href="#"><span className="text">Keneth Dale</span></a>


                   </div>
                   <div className="email">
                   <a href="#"><span className="fab fa-envelope"></span></a>
                   <a href="#"><span className="text">abc@gmail.com</span></a>


                   </div>
                   <div className="phone">
                   <a href="#"><span className="fab fa-phone-alt"></span></a>
                   <a href="#"><span className="text">05464676575</span></a>


                   </div>

               </div>

           </div>

           <div className="col-md-4 text-center">
               <h2>contact us</h2>
               <div className="content">
                   <form action="#">
                       <div className="email">
                           <div className="text">Email *

                           </div>
                           <input type="email" required/>

                       </div>
                       <div className="msg">
                           <div className="text">Message *</div>
                           <textarea required></textarea>
                       </div>
                       <div className="footer-btn">
                           <button type="submit">send</button>

                       </div>
                   </form>

               </div>

           </div>
           </footer>

       </div>
    )
}