import Link from 'next/link';
import moment from 'moment';
import { PostContent } from "../../lib/posts";
import * as React from "react";

type Post = {
    post: PostContent;
};

export default function List({post}: Post) {
    const link = `/posts/${post.slug}`;
    const image = post.featured_image ? post.featured_image.src : "/images/blog/blog2.png";

    return (
        <div key={post.slug} className="col-lg-4 col-md-6">
            <div className="single-news">
                <div className="blog-img">
                    <Link href={link}>
                        <a>
                            <img src={image} alt="Image" />
                        </a>
                    </Link>

                    <div className="dates">
                        <span>{moment(post.date, "YYYY-MM-DD").format("DD MMMM")}</span>
                    </div>
                </div>
                <div className="news-content-wrap">
                    <Link href={link}>
                        <a>
                            <h3>{post.title}</h3>
                        </a>
                    </Link>

                    <p>{post.excerpt}</p>

                    <Link href={link}>
                        <a className="read-more">
                            Read More <i className="bx bx-plus" />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}
