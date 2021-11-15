import React from 'react';
import Products from '../Products/Products';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Counter from '../Counter/Counter';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Products></Products>
        <Reviews></Reviews>
        <Counter></Counter>
        </>
    );
};

export default Home;