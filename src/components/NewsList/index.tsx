import { PostContent } from "../../lib/posts";
import List from './list';
import * as React from "react";

type Props = {
    posts: PostContent[];
};

export default function News({posts}: Props) {
    return (
        <div>
            <div className="row">
                {posts.map(post => <List key={post.slug} post={post}/>)}
            </div>
        </div>
    )
}
