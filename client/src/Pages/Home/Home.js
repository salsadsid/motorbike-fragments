import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import HaveAQuestion from './HaveAQuestion';
import ExpertAdvice from './ExpertAdvice';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <ExpertAdvice></ExpertAdvice>
            <Reviews></Reviews>
            <HaveAQuestion></HaveAQuestion>
            <Footer></Footer>
        </div>
    );
};

export default Home;