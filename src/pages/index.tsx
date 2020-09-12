import * as React from 'react';
import {GetStaticProps, NextPage, NextPageContext} from 'next';
import Navbar from '../layouts/Navbar';
import MainBanner from '../components/Home/MainBanner';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import News from '../components/Common/News';
import Footer from '../layouts/Footer';
import config from "../lib/config";
import { countPosts, listPostContent, PostContent } from "../lib/posts";
import { listTags, TagContent } from "../lib/tags";

type Props = {
    posts: PostContent[];
    tags: TagContent[];
    pagination: {
        current: number;
        pages: number;
    };
};

const Index: NextPage<Props> = ({posts, tags, pagination}: Props) => {
    return (
        <div>
            <Navbar />
            <MainBanner />
            <WhyChooseUs />
            <News posts={posts} tags={tags} pagination={pagination} />
            <Footer />
        </div>
    )
};

export const getStaticProps: GetStaticProps = async () => {
    const posts = listPostContent(1, config.posts_per_page);
    const tags = listTags();
    const pagination = {
        current: 1,
        pages: Math.ceil(countPosts() / config.posts_per_page),
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
