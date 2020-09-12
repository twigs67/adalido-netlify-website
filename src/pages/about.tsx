import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Index from '../components/About';
import Layout from "../layouts/main";

const AboutPage = () => {
    const pageTitle = "About Adalido";
    return (
        <Layout>
            <PageBanner
                pageTitle={pageTitle}
                homePageUrl="/"
                homePageText="Home"
                activePageText={pageTitle}
            />
            <Index />
        </Layout>
    )
};
export default AboutPage;
