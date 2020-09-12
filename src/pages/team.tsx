import React from 'react';
import PageBanner from '../components/Common/PageBanner';
import Index from '../components/Team';
import Layout from "../layouts/main";

const TeamPage = () => {
    return (
        <Layout>
            <PageBanner
                pageTitle="Team"
                homePageUrl="/"
                homePageText="Home"
                activePageText="The Adalido Team"
            />
            <Index />
        </Layout>
    )
};
export default TeamPage;
