import React from 'react';
import Link from 'next/link';
import Date from "../Original/Date";
import {getAuthor} from "../../lib/authors";
import Author from "../Original/Author";

type Props = {
    date: Date;
    author: any;
    content: any;
};

export default function NewsPost({
      date,
      author,
      content,
  }: Props) {
    return (
        <section className="news-details-area ptb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="blog-details-desc">
                            <div className="article-content">
                                <div className="entry-meta">
                                    <ul>
                                        <li>
                                            <span>Posted On:</span>
                                            <Date date={date} />
                                        </li>
                                        <li>
                                            <span>Posted By:</span>
                                            <Author author={getAuthor(author)} />
                                        </li>
                                    </ul>
                                </div>

                                <div>{content}</div>
                            </div>

                            <div className="article-footer">
                                <div className="article-tags">
                                    <span><i className='bx bx-share-alt'></i></span>
                                    <Link href="#">
                                        <a>Share</a>
                                    </Link>
                                </div>

                                <div className="article-share">
                                    <ul className="social">
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className='bx bxl-facebook'></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className='bx bxl-twitter'></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className='bx bxl-linkedin'></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#">
                                                <a target="_blank">
                                                    <i className='bx bxl-pinterest-alt'></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="post-navigation">
                                <div className="navigation-links">
                                    <div className="nav-previous">
                                        <Link href="#">
                                            <a>
                                                <i className='bx bx-left-arrow-alt'></i> Prev Post
                                            </a>
                                        </Link>
                                    </div>

                                    <div className="nav-next">
                                        <Link href="#">
                                            <a>Next Post <i className='bx bx-right-arrow-alt'></i></a>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* Comments Area */}
                            {/*<CommentsArea />*/}
                        </div>
                    </div>

                    {/*<div className="col-lg-4 col-md-12">*/}
                    {/*    <NewsSidebar />*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
}
