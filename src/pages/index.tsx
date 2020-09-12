import * as React from 'react';
import {GetStaticProps, NextPage} from 'next';
import MainBanner from '../components/Home/MainBanner';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import News from '../components/news';
import Footer from '../layouts/Footer';
import { listPostContent, PostContent } from "../lib/posts";
import { listTags } from "../lib/tags";
import Layout from "../layouts/mdx";

type Props = {
    posts: PostContent[];
};

const Index: NextPage<Props> = ({posts}: Props) => {
    return (
        <Layout>
            <MainBanner />
            <WhyChooseUs />
            <section className="news-area pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Latest News</span>
                        <h2>Our Recent News </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum fugit temporibus possimus itaque accusamus voluptatibus dignissimos nobis eaque.</p>
                    </div>
                    <News posts={posts} />
                </div>
            </section>
            <Footer />
        </Layout>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = listPostContent(1, 3);
    const tags = listTags();
    const pagination = {
        current: 1,
        pages: 3,
    };
    return {
        props: {
            posts,
            tags,
            pagination,
        },
    };
};

export default Index;
