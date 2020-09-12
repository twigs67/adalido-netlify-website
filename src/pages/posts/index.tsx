import React from 'react';
import Navbar from '../../layouts/Navbar';
import PageBanner from '../../components/Common/PageBanner';
import News from "../../components/news";
import Footer from '../../layouts/Footer';
import { listPostContent, PostContent } from "../../lib/posts";
import { listTags } from "../../lib/tags";
import {GetStaticProps, NextPage} from "next";
import config from "../../lib/config";
import {countPosts} from "../../lib/posts";

type Props = {
    posts: PostContent[];
};

const NewsGrid: NextPage<Props> = ({posts}: Props) => {
    return (
        <div>
          <Navbar />
          <PageBanner
              pageTitle="News Grid"
              homePageUrl="/"
              homePageText="Home"
              activePageText="News Grid"
          />
            <section className="news-area pt-100 pb-70">
                <div className="container">
                    <News posts={posts} />
                </div>
            </section>
          <Footer />
        </div>
    );
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

export default NewsGrid;
