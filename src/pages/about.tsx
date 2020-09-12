import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import About from '../components/About';
import Footer from '../layouts/Footer';

class NewsGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="About Us"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="About Us"
                />
                <About />
                <Footer />
            </React.Fragment>
        );
    }
}

export default NewsGrid;
