import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';
import Navbar from '../../layouts/Navbar';
import MainBanner from '../../components/Home/MainBanner';
import PartnerSlider from '../../components/Common/PartnerSlider';
import About from '../../components/Home/About';
import WhyChooseUs from '../../components/Home/WhyChooseUs';
import Services from '../../components/Home/Services';
import MakeYourBusiness from '../../components/Common/MakeYourBusiness';
import WhatWeOffer from '../../components/Home/WhatWeOffer';
import CaseStudies from '../../components/Home/CaseStudies';
import Testimonials from '../../components/Common/Testimonials';
import Faq from '../../components/Home/Faq';
import News from '../../components/Common/News';
import Footer from '../../layouts/Footer';

interface Props {
    query: { name?: string };
}

const Index: NextPage<Props> = ({ query }) => {
    const greetName = query.name ? query.name : 'World';
    // return <div>Hello, {greetName}!</div>;

    return (
        <div>
            <Navbar />
            <MainBanner />
            <PartnerSlider />
            <About />
            <WhyChooseUs />
            <Services />
            <MakeYourBusiness />
            <WhatWeOffer />
            <CaseStudies />
            <Testimonials />
            <Faq />
            <News />
            <Footer />
        </div>
    )
};

Index.getInitialProps = async (ctx: NextPageContext) => {
    const { query } = ctx;
    return { query };
};

export default Index;
