import React from 'react';


const Footer = () => {
    // let currentYear = new Date().getFullYear();
    return (
        <div>
            <footer className="footer-bottom-area">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        {/*<div className="col-lg-4">*/}
                        {/*    <div className="copy-right">*/}
                        {/*        <p>Copyright <i className="bx bx-copyright" /> {currentYear} Adalido. All Rights Reserved</p>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="col-lg-4">*/}
                            <div className="designed">
                                <p>
                                    Designed By <i className='bx bx-heart' /> <a href="https://envytheme.com/" target="_blank">Team Adalido</a>
                                </p>
                            </div>
                        {/*</div>*/}

                        {/*<div className="col-lg-3">*/}

                        {/*</div>*/}
                    </div>
                </div>
            </footer>
        </div>
    )
};

export default Footer;
