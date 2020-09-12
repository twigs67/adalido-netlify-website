import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import Layout from "../components/Original/Layout";

function NavBar() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId ? elementId.classList.add("is-sticky"): null;
            } else {
                elementId ? elementId.classList.remove("is-sticky") : null;
            }
        });
        window.scrollTo(0, 0);
    });

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <nav>
            <div id="navbar" className="navbar-area fixed-top">
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <Link href="/">
                            <a className="navbar-brand">
                                <img src="/images/white-logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar" style={{marginTop: '3px'}} />
                            <span className="icon-bar middle-bar" />
                            <span className="icon-bar bottom-bar" style={{marginBottom: '3px'}} />
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link href="/">
                                        <a className="nav-link">
                                            Home
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/about">
                                        <a className="nav-link">
                                            About
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/team">
                                        <a className="nav-link">
                                            Team
                                        </a>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link href="/posts">
                                        <a className="nav-link">
                                            News
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </nav>
    )
}

export default NavBar;
