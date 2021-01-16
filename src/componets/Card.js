import React from 'react';
import './Card.css';
import Carditem from './Carditem';
import logo from '../images/img-9.jpg';
import logo1 from '../images/img-2.jpg';
import logo3 from '../images/img-3.jpg';
import logo4 from '../images/img-4.jpg';
import logo8 from '../images/img-8.jpg';

function Card() {  
    return (
        <div className="cards">
            <h1>check out card</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <div className="cards__items">
                        <Carditem 
                            src={logo}
                            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.  "
                            label="Adventure"
                            path="/services"

                        />
                        <Carditem 
                            src={logo1}
                            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
                            label="Luxury"
                            path="/services"

                        />
                    </div>
                    <div className="cards__items">
                        <Carditem 
                            src={logo3}
                            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
                            label="Mystery"
                            path="/services"

                        />
                        <Carditem 
                            src={logo4}
                            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
                            label="Adventure"
                            path="/services"

                        />
                        <Carditem 
                            src={logo8}
                            text="Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. "
                            label="Adventure"
                            path="/services"

                        />
                    </div>
                </div>
            </div>
        </div>
    )   
}

export default Card;