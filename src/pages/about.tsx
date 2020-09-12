import * as React from 'react';
import { NextPage, NextPageContext } from 'next';
import Link from 'next/link';

interface Props {
    query: { name?: string };
}

const About: NextPage<Props> = ({ query }) => {
    const greetName = query.name ? query.name : 'World';
    // return <div>Hello, {greetName}!</div>;

    return (
        <div>
            <p>
                This is about the {greetName} page.{' '}
                <Link href="/">
                    <a>Go back to the home page</a>
                </Link>
            </p>
        </div>
    )
};

About.getInitialProps = async (ctx: NextPageContext) => {
    const { query } = ctx;
    return { query };
};

export default About;
