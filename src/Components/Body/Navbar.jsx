import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav className="navbar border-navbar-gradient navbar-expand-lg navbar-light fixed-top py-3 d-block" data-navbar-on-scroll="data-navbar-on-scroll">
                <div className="container">
                    <a className="navbar-brand" href="/"><img src="assets/img/gallery/logo.png" width={118} alt="logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
                    <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto pt-2 pt-lg-0 font-base">
                            <li className="nav-item px-2"><a className="nav-link" aria-current="page" href="#about">About Us</a></li>
                            <li className="nav-item px-2"><a className="nav-link" href="#Services">Services</a></li>
                            <li className="nav-item px-2"><a className="nav-link" href="#Staff">Staff</a></li>
                            <li className="nav-item px-2"><a className="nav-link" href="#Blogs">Blogs </a></li>
                            <li className="nav-item px-2"><a className="nav-link" href="#ContactUs">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
