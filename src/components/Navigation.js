import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Navigation = ({ fixedNav }) => {
  let classes = "pink lighten-5 blue-text text-darken-4";
  return (
    <Fragment>
      <nav
        className={fixedNav ? classes + " fixed-nav-top" : classes}
        style={{ textAlign: "center" }}
      >
        <div class="nav-wrapper">

          <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul className="navList center blue-text text-lighten-4 s12 m12 l12  hide-on-med-and-down">
            {fixedNav && (
              <li>
                <Link to="/" className="blue-text text-lighten-2">
                  IMAGE
            </Link>
              </li>
            )}
            <li>
              <Link to="/" className="blue-text text-lighten-2">
                Home
          </Link>
            </li>
            <li>
              <Link to="/Earlyyears" className="blue-text text-lighten-2">
                Early tyears foundation stage
          </Link>
            </li>
            <li>
              <Link to="/Ofested" className="blue-text text-lighten-2">
                Ofsted
          </Link>
            </li>
            <li>
              <Link to="/Funding" className="blue-text text-lighten-2">
                Funding
          </Link>
            </li>
            <li>
              <Link to="/Testimonials" className="blue-text text-lighten-2">
                Testimonials
          </Link>
            </li>
            <li>
              <Link to="/Fundraising" className="blue-text text-lighten-2">
                Fundraising
          </Link>
            </li>
            <li>
              <Link to="/Gallery" className="blue-text text-lighten-2">
                Gallery
          </Link>
            </li>
            <li>
              <Link to="/Termdates" className="blue-text text-lighten-2">
                Term Dates
          </Link>
            </li>
            <li>
              <Link to="/Contactus" className="blue-text text-lighten-2">
                Contact Us
          </Link>
            </li>
          </ul>
        </div>
      </nav>

      <ul class="sidenav" id="mobile-demo">
        <li>
          <Link to="/" className="blue-text text-lighten-2 sidenav-close">
            Home
            </Link>
        </li>
        <li>
          <Link to="/Earlyyears" className="blue-text text-lighten-2 sidenav-close">
            Early tyears foundation stage
            </Link>
        </li>
        <li>
          <Link to="/Ofested" className="blue-text text-lighten-2 sidenav-close">
            Ofsted
            </Link>
        </li>
        <li>
          <Link to="/Funding" className="blue-text text-lighten-2 sidenav-close">
            Funding
            </Link>
        </li>
        <li>
          <Link to="/Testimonials" className="blue-text text-lighten-2 sidenav-close">
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="/Fundraising" className="blue-text text-lighten-2 sidenav-close">
            Fundraising
          </Link>
        </li>
        <li>
          <Link to="/Gallery" className="blue-text text-lighten-2 sidenav-close">
            Gallery
          </Link>
        </li>
        <li>
          <Link to="/Termdates" className="blue-text text-lighten-2 sidenav-close">
            Term Dates
          </Link>
        </li>
        <li>
          <Link to="/Contactus" className="blue-text text-lighten-2 sidenav-close">
            Contact Us
          </Link>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navigation;
