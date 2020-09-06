import React from "react";
import profileImg from "./img/profile-img.jpg";
import facebookIcon from "./img/facebook.svg";
import twitterIcon from "./img/twitter.svg";
import linkedinIcon from "./img/linkedin.svg";
import "./Sidenav.scss";
import {
  HomeIcon,
  PersonIcon,
  FileIcon,
  MegaphoneIcon,
} from "@primer/octicons-react";

const SideNav = () => {
  return (
    <div className="h-100 sidenav-bg">
      <div className="d-flex flex-column h-100">
        <div className="profile mb-5">
          <div className="d-flex flex-column">
            <img
              src={profileImg}
              className="img-fluid round-circle profile-pic"
              alt=""
            />
            <h3 className="text-light text-center">Aniket Das</h3>
            <div className="d-flex justify-content-center">
              <a href="#">
                <img src={facebookIcon} alt="" className="social-links" />
              </a>
              <a href="#">
                <img src={twitterIcon} alt="" className="social-links" />
              </a>
              <a href="#">
                <img src={linkedinIcon} alt="" className="social-links" />
              </a>
            </div>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="mb-4">
              <HomeIcon className="inactive-icon-color" size="medium" />
              <span className="text-light h5 pl-2">Home</span>
            </li>
            <li className="mb-4">
              <PersonIcon className="inactive-icon-color" size="medium" />
              <span className="text-light h5 pl-2">About</span>
            </li>
            <li className="mb-4">
              <FileIcon className="inactive-icon-color" size="medium" />
              <span className="text-light h5 pl-2">Resume</span>
            </li>
            <li className="mb-4">
              <MegaphoneIcon className="inactive-icon-color" size="medium" />
              <span className="text-light h5 pl-2">Contact</span>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
