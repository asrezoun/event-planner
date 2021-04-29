import React from 'react';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import NavMenu from '../NavMenu/NavMenu';
import PreviousWork from '../PreviousWork/PreviousWork';
import ReviewSection from '../ReviewSection/ReviewSection';
import Services from '../Services/Services';

const HomePage = () => {
    return (
        <div>
            <NavMenu></NavMenu>
            <Header></Header>
            <Services></Services>
            <PreviousWork></PreviousWork>
            <ReviewSection></ReviewSection>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;