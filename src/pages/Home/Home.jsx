import React from 'react';
import Banner from './Banner/Banner';
import ProductList from '../Products/ProductList';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ProductList></ProductList>
            <ProductList></ProductList>
        </div>
    );
};

export default Home;