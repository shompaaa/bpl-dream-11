import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Hero from '../../components/Hero/Hero';
import Players from '../../components/Players/Players';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Players></Players>
        </div>
    );
};

export default Home;