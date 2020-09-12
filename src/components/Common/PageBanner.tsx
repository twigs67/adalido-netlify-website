import React, { Component } from 'react';
import Link from 'next/link';
import {NextPage} from "next";

type Props = {
    pageTitle: string;
    homePageUrl: string;
    homePageText: string;
    activePageText: string;
}

const PageBanner: NextPage<Props> = ({pageTitle, homePageText, homePageUrl, activePageText}: Props) => {
    return (
        <div className="page-title-area item-bg1">
            <div className="container">
                <div className="page-title-content">
                    <h2>{pageTitle}</h2>
                    <ul>
                        <li>
                            <Link href={homePageUrl}>
                                <a>{homePageText}</a>
                            </Link>
                        </li>
                        <li>{activePageText}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
};

export default PageBanner;
