import React from "react";
import IconButton from "@mui/material/IconButton";
import { CircularProgress } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export function SocialMedia({ links }: { links: any }) {
  const socialMediaIcons: any = {
    facebook: FacebookIcon,
    twitter: TwitterIcon,
    linkedin: LinkedInIcon,
  };

  return (
    <>
      {links.length > 0 ? (
        links.map((item: any, index: any) => (
          <IconButton
            color="primary"
            aria-label={item.key}
            href={item.defaultValue}
            target="_blank"
            sx={{ display: { xs: "inline-flex" } }}
          >
            {React.createElement(socialMediaIcons[item.key], {})}
          </IconButton>
        ))
      ) : (
        <CircularProgress />
      )}
    </>
  );
}
