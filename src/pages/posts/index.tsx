import React from 'react';
import PageBanner from '../../components/Common/PageBanner';
import News from "../../components/NewsList";
import { listPostContent, PostContent } from "../../lib/posts";
import { listTags } from "../../lib/tags";
import {GetStaticProps, NextPage} from "next";
import config from "../../lib/config";
import {countPosts} from "../../lib/posts";
import Layout from "../../layouts/main";

type Props = {
    posts: PostContent[];
};

const NewsGrid: NextPage<Props> = ({posts}: Props) => {
    return (
        <Layout>
          <PageBanner
              pageTitle="Adalido News"
              homePageUrl="/"
              homePageText="Home"
              activePageText="Adalido News"
          />
            <section className="news-area pt-100 pb-70">
                <div className="container">
                    <News posts={posts} />
                </div>
            </section>
        </Layout>
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
