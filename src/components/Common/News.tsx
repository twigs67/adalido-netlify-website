import {GetStaticProps} from "next";
import Link from 'next/link';
import { countPosts, listPostContent, PostContent } from "../../lib/posts";
import { listTags, TagContent } from "../../lib/tags";
import config from "../../lib/config";

type Props = {
    posts: PostContent[];
    tags: TagContent[];
    pagination: {
        current: number;
        pages: number;
    };
};

export default function News({posts, tags, pagination}: Props) {
    return (
        <section className="news-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span>Latest News</span>
                    <h2>Our Recent News </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut ipsum fugit temporibus possimus itaque accusamus voluptatibus dignissimos nobis eaque.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-news">
                            <div className="news-content-wrap">
                                <Link href="/news-details">
                                    <a>
                                        <h3>Is Machine Learning Right For You</h3>
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                <Link href="/news-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-news">
                            <div className="blog-img">
                                <Link href="/news-details">
                                    <a>
                                        <img src="/images/blog/blog2.png" alt="Image" />
                                    </a>
                                </Link>

                                <div className="dates">
                                    <span>21 February</span>
                                </div>
                            </div>

                            <div className="news-content-wrap">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="flaticon-user"></i> Admin
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="flaticon-conversation"></i> 3 Comments
                                    </li>
                                </ul>

                                <Link href="/news-details">
                                    <a>
                                        <h3>The State Of Artificial Intelligence</h3>
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                <Link href="/news-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                        <div className="single-news">
                            <div className="blog-img">
                                <Link href="/news-details">
                                    <a>
                                        <img src="/images/blog/blog3.png" alt="Image" />
                                    </a>
                                </Link>

                                <div className="dates">
                                    <span>22 February</span>
                                </div>
                            </div>

                            <div className="news-content-wrap">
                                <ul>
                                    <li>
                                        <Link href="#">
                                            <a>
                                                <i className="flaticon-user"></i> Admin
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <i className="flaticon-conversation"></i> 4 Comments
                                    </li>
                                </ul>

                                <Link href="/news-details">
                                    <a>
                                        <h3>Our Company Machine Learning </h3>
                                    </a>
                                </Link>

                                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga veritatis veniam corrupti perferendis minima in.</p>

                                <Link href="/news-details">
                                    <a className="read-more">
                                        Read More <i className="bx bx-plus"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
