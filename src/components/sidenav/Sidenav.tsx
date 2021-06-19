import React, { useEffect, useState } from "react";
import "./Sidenav.scss";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ContactsIcon from "@material-ui/icons/Contacts";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";
import ProfileBadge from "../profile-badge/ProfileBadge";
import { schemaDataForScreens } from "../../utils/services/Schema.service";
import { SchemaConstants } from "../../utils/constants/Schema.constants";

const SideNav = () => {
  const [socialMediaLinks, setSocialMediaLinks] = useState([]);
  useEffect(() => {
    const socialMediaSchema = schemaDataForScreens(
      SchemaConstants.SocialMediaSchema
    ).subscribe((socialMedia: any) => {
      setSocialMediaLinks(socialMedia.fields);
    });

    return () => {
      socialMediaSchema.unsubscribe();
    };
  }, []);
  return (
    <div className="h-100 sidenav-bg">
      <div className="d-flex flex-column h-100">
        <div className="profile mb-5">
          <div className="d-flex flex-column">
            <ProfileBadge
              size="medium"
              image="https://firebasestorage.googleapis.com/v0/b/digital-portfolio-ee168.appspot.com/o/flamelink%2Fmedia%2Fdeveloper-activity-bro.svg?alt=media&token=cf37d078-350e-4e97-83c1-47ded3107f13"
            />
            <h3 className="text-center">Aniket Das</h3>
            <div className="d-flex justify-content-center">
              {socialMediaLinks.map((link: any) => {
                return (
                  <Link
                    to={{ pathname: link.defaultValue }}
                    target="_blank"
                    key={link.id}
                    className="pr-2"
                  >
                    {link.key === "facebook" && (
                      <FacebookIcon fontSize="large" />
                    )}
                    {link.key === "twitter" && <TwitterIcon fontSize="large" />}
                    {link.key === "linkedin" && (
                      <LinkedInIcon fontSize="large" />
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="mb-4">
              <Link to="/home">
                <HomeIcon />
                <span className="h5 pl-2">Home</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/about">
                <PersonIcon />
                <span className="h5 pl-2">About</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/resume">
                <MenuBookIcon />
                <span className="h5 pl-2">Resume</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="/contact">
                <ContactsIcon />
                <span className="h5 pl-2">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideNav;
