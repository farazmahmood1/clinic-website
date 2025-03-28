import React from 'react'

const Footer = () => {
    return (
        <div>

            <section className="py-0 bg-secondary">
                <div className="bg-holder opacity-25" style={{ backgroundImage: 'url(assets/img/gallery/dot-bg.png)', backgroundPosition: 'top left', marginTop: '-3.125rem', backgroundSize: 'auto' }}>
                </div>
                <div className="container">
                    <div className="row py-8">
                        <div className="col-12 col-sm-12 col-lg-6 mb-4 order-0 order-sm-0"><a className="text-decoration-none" href="#"><img src="assets/img/gallery/footer-logo.png" height={51} alt /></a>
                            <p className="text-light my-4">The world's most trusted <br />telehealth company.</p>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 mb-3 order-2 order-sm-1">
                            <h5 className="lh-lg fw-bold mb-4 text-light font-sans-serif">Departments</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><a className="footer-link" href="#!">Eye care</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Cardiac are</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Heart care</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                            <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif">Membership</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><a className="footer-link" href="#!">Free trial</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Silver</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Premium</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-2 mb-3 order-3 order-sm-2">
                            <h5 className="lh-lg fw-bold text-light mb-4 font-sans-serif"> Customer Care</h5>
                            <ul className="list-unstyled mb-md-4 mb-lg-0">
                                <li className="lh-lg"><a className="footer-link" href="#!">About Us</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Contact US</a></li>
                                <li className="lh-lg"><a className="footer-link" href="#!">Get Update</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <section className="py-0 bg-primary">
                    <div className="container">
                        <div className="row justify-content-md-between justify-content-evenly py-4">
                            <div className="col-12 col-sm-8 col-md-6 col-lg-auto text-center text-md-start">
                                <p className="fs--1 my-2 fw-bold text-200">All rights Reserved © Your Company, 2021</p>
                            </div>
                           
                        </div>
                    </div>
                </section>

            </section>

        </div>
    )
}

export default Footer
