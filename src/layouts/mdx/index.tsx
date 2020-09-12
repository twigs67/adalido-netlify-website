import React from "react";
import Date from "../../components/Original/Date";
import Layout from "../../components/Original/Layout";
import BasicMeta from "../../components/Meta/BasicMeta";
import JsonLdMeta from "../../components/Meta/JsonLdMeta";
import OpenGraphMeta from "../../components/Meta/OpenGraphMeta";
import TwitterCardMeta from "../../components/Meta/TwitterCardMeta";
import { getAuthor } from "../../lib/authors";
import { getTag } from "../../lib/tags";
import PageBanner from "../../components/Common/PageBanner";
import Footer from "../Footer";
import NewsPost from "../../components/NewsPost"

type Props = {
    title: string;
    date: Date;
    slug: string;
    description: string;
    tags: string[];
    author: string;
};

export default function Index({
          title,
          date,
          slug,
          author,
          tags,
          description,
      }: Props) {
    const keywords = tags.map((it) => getTag(it).name);
    const authorName = getAuthor(author).name;
    return ({ children: content }) => {
        return (
            <Layout>
                <BasicMeta
                    url={`/posts/${slug}`}
                    title={title}
                    keywords={keywords}
                    description={description}
                />
                <TwitterCardMeta
                    url={`/posts/${slug}`}
                    title={title}
                    description={description}
                />
                <OpenGraphMeta
                    url={`/posts/${slug}`}
                    title={title}
                    description={description}
                />
                <JsonLdMeta
                    url={`/posts/${slug}`}
                    title={title}
                    keywords={keywords}
                    date={date}
                    author={authorName}
                    description={description}
                />
                <PageBanner
                    pageTitle={title}
                    homePageUrl="/posts"
                    homePageText="News"
                    activePageText={title}
                />
                <NewsPost date={date} author={author} content={content}/>
                <Footer />
                <style global jsx>
                    {`
                     code {
                        display: block;
                        background-color: rgba(27,31,35,.05);
                        line-height: 1.25rem;
                        padding: 1rem;
                        overflow: auto;
                        margin: 1.75rem 0 0;
                    }
                    `}
                </style>
            </Layout>
        );
    };
}
