import React from 'react';
import './Home.css';
import  HeroSection from '../HeroSection';
import  Card from '../Card';
import  Footer from '../Footer';

function Home() {
    return (
        <div>
            <HeroSection />
            <Card />
            <Footer />
        </div>
    )   
}

export default Home;