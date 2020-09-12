import React, { Component } from 'react';
import Navbar from '../layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import TeamCard from '../components/TeamCard';
import Footer from '../layouts/Footer';

class NewsGrid extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Team"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="The Adalido Team"
                />
                <TeamCard />
                <Footer />
            </React.Fragment>
        );
    }
}

export default NewsGrid;
