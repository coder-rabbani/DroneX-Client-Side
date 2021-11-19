import React from 'react';
import Products from '../Products/Products';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Counter from '../Counter/Counter';
import Header from '../../../Shared/Header/Header';
import Footer from '../../../Shared/Footer/Footer';

const Home = () => {
    return (
        <>
        <Header />
        <Banner></Banner>
        <Products></Products>
        <Reviews></Reviews>
        <Counter></Counter>
        <Footer/>
        </>
    );
};

export default Home;