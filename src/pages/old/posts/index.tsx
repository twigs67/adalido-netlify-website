import { GetStaticProps } from "next";
import Layout from "../../../old/components/Layout";
import BasicMeta from "../../../old/components/meta/BasicMeta";
import OpenGraphMeta from "../../../old/components/meta/OpenGraphMeta";
import TwitterCardMeta from "../../../old/components/meta/TwitterCardMeta";
import PostList from "../../../old/components/PostList";
import config from "../../../old/lib/config";
import { countPosts, listPostContent, PostContent } from "../../../old/lib/posts";
import { listTags, TagContent } from "../../../old/lib/tags";
import Head from "next/head";

type Props = {
  posts: PostContent[];
  tags: TagContent[];
  pagination: {
    current: number;
    pages: number;
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts";
  const title = "All posts";
  return (
    <Layout>
      <BasicMeta url={url} title={title} />
      <OpenGraphMeta url={url} title={title} />
      <TwitterCardMeta url={url} title={title} />
      <PostList posts={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

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
